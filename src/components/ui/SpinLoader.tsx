export default function SpinLoader({ className }: { className: string }) {
  return (
    <div
      className={`animate-spin border-b-transparent rounded-full border-4 ${className}`}
    ></div>
  );
}
