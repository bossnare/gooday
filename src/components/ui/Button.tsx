import type { ButtonProps } from '@/types/propTypes';
import SpinLoader from './SpinLoader';

const Button = ({ label, className, onClick, loading }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-1.5 px-4 rounded-md min-w-[100px] min-h-[40px] ${className}`}
    >
      {loading && (
        <span>
          <SpinLoader className="size-6 border-gray-400" />
        </span>
      )}
      {!loading && label}
    </button>
  );
};

export default Button;
