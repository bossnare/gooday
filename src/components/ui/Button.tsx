import type { ButtonProps } from '@/types/propTypes';

const Button = ({ label, className, onClick, loading }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`py-1.5 px-4 rounded-md ${className}`}>
      {loading && <span className="animate-spin">🔄</span>}
      {!loading && label}
    </button>
  );
};

export default Button;
