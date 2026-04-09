const Skeleton = ({ className = '' }) => {
  return (
    <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
  );
};

export const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <Skeleton className="h-6 w-1/3 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
};

export const TableSkeleton = ({ rows = 5 }) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-3 w-1/3" />
          </div>
          <Skeleton className="h-6 w-20" />
        </div>
      ))}
    </div>
  );
};

export const StatsCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <Skeleton className="h-4 w-24 mb-2" />
      <Skeleton className="h-8 w-32" />
    </div>
  );
};

export const FormSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-40" />
    </div>
  );
};

export const ImageSkeleton = () => {
  return (
    <Skeleton className="aspect-video w-full rounded-xl" />
  );
};

export default Skeleton;

