import type { ButtonProps } from '@/types/propTypes';

const Button = ({ label, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`py-1.5 px-4 rounded-md ${className}`}>
      {label}
    </button>
  );
};

export default Button;
