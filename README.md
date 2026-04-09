# ONEWAY FOUNDATION - Production Ready Platform

A professional NGO website with complete backend system and admin panel.

## 🚀 Tech Stack

### Frontend

- React 18 + Vite
- TailwindCSS
- React Router DOM
- Axios
- Framer Motion

### Backend

- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Helmet Security
- Rate Limiting

---

## 📦 Installation

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

---

## 🔧 Environment Variables

### Server (.env)

```text
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/oneway_foundation
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
RAZORPAY_KEY_ID=your-key-id
RAZORPAY_KEY_SECRET=your-key-secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@onewayfoundation.org
CLIENT_URL=http://localhost:5173
```

### Client (.env)

```text
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=ONEWAY Foundation
VITE_APP_URL=http://localhost:5173
```

---

## 📁 Project Structure

```text
oneway-foundation/
├── client/                    # Frontend React App
│   ├── src/
│   │   ├── admin/           # Admin Panel
│   │   │   ├── pages/       # Dashboard, Members, Donations, etc.
│   │   │   └── components/
│   │   ├── components/      # Reusable components
│   │   │   ├── common/      # Navbar, Footer, Layouts
│   │   │   └── ui/          # UI components
│   │   ├── context/         # React Context (Auth, Toast)
│   │   ├── pages/           # Public pages
│   │   └── services/       # API service layer
│   └── ...

├── server/                   # Backend API
│   ├── config/              # Database, Razorpay config
│   ├── controllers/         # Route handlers
│   ├── middleware/         # Auth, Security, Validation
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── utils/              # Email templates
│   └── server.js           # Entry point

└── ...
```

---

## 🔐 Security Features

- Helmet.js for HTTP headers
- Rate limiting
- CORS whitelist
- Input validation (Joi)
- XSS prevention (sanitize-html)
- MongoDB injection prevention
- JWT authentication
- Password hashing (bcrypt)
- Secure file uploads (Multer)

---

## 📱 Features

### Public Website

- Home, About, Team, Programs
- Gallery, Media, Documents
- Donation system (Razorpay)
- Membership application
- Contact form
- Partner promotion inquiry

### Admin Panel

- Dashboard with animated stats
- Member management (approve/reject)
- Donation tracking
- Partner inquiries
- Contact messages
- Social posts management
- Gallery management

---

## 📄 API Endpoints

### Authentication

- `POST /api/admin/login` - Admin login
- `GET /api/admin/me` - Get current admin

### Members

- `POST /api/members` - Submit application
- `GET /api/members` - Get all members
- `GET /api/members/stats` - Get stats
- `PUT /api/members/:id/status` - Update status

### Donations

- `POST /api/donation/create-order` - Create order
- `POST /api/donation/verify` - Verify payment
- `GET /api/donation/all` - Get all donations

### Partners

- `POST /api/partners` - Submit inquiry
- `GET /api/partners` - Get all
- `PUT /api/partners/:id/status` - Update status

### Contact

- `POST /api/contact` - Submit message
- `GET /api/contact` - Get all messages
- `PUT /api/contact/:id/read` - Mark as read

### Gallery

- `GET /api/gallery` - Get all images
- `POST /api/gallery` - Upload image
- `DELETE /api/gallery/:id` - Delete image

### Social

- `GET /api/social` - Get posts
- `POST /api/social` - Create post
- `PUT /api/social/:id` - Update post
- `DELETE /api/social/:id` - Delete post

---

## 🎨 Design System

### Colors

- Primary: Orange (#ea580c)
- Secondary: Sky Blue (#0ea5e9)
- Dark: Slate (#0f172a)
- Light: White/Slate

### Components

- Custom buttons (primary, secondary, outline)
- Cards with hover effects
- Skeleton loaders
- Toast notifications
- Modal system

---

## 📄 License

MIT License - ONEWAY Foundation

---

## 👏 Credits

Built with ❤️ for ONEWAY Foundation

# One-way-Foundation
