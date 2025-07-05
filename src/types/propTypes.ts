type ButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
};

type FetchProps = {
  url: string;
};

export type { ButtonProps, FetchProps };
