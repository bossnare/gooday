import type { ButtonProps } from '../../types/propTypes';

const Button = ({ label, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
