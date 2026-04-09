export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
      stack: err.stack,
      error: err,
    });
  } else {
    if (err.name === 'CastError') {
      error = new AppError('Invalid resource ID', 400);
    }
    if (err.code === 11000) {
      const field = Object.keys(err.keyValue)[0];
      error = new AppError(`Duplicate field value: ${field}`, 400);
    }
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);
      error = new AppError(messages.join('. '), 400);
    }
    if (err.name === 'JsonWebTokenError') {
      error = new AppError('Invalid token', 401);
    }
    if (err.name === 'TokenExpiredError') {
      error = new AppError('Token expired', 401);
    }

    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || 'Server Error',
    });
  }
};

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export const notFound = (req, res, next) => {
  const error = new AppError(`Not Found - ${req.originalUrl}`, 404);
  next(error);
};

