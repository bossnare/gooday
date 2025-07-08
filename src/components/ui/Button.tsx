import type { ButtonProps } from '@/types/ui/button';
import SpinLoader from './SpinLoader';

const Button = ({ label, className, onClick, loading }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-1 px-2 rounded-md min-w-[80px] min-h-[40px] ${className}`}
    >
      {loading && (
        <span>
          <SpinLoader className="size-5 border-gray-400" />
        </span>
      )}
      {!loading && label}
    </button>
  );
};

export default Button;
