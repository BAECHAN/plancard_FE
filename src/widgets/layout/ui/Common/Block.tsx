interface BlockProps {
  children: React.ReactNode;
  label: string;
  className?: string;
}

const Block = ({ children, label, className = '' }: BlockProps) => {
  return (
    <div
      className={`flex w-full ${className}`}
      aria-label={`${label}-block`}
    >
      {children}
    </div>
  );
};

export default Block;
