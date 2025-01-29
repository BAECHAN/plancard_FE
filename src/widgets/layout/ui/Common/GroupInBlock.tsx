interface GroupInBlockProps {
  children: React.ReactNode;
  label: string;
  className?: string;
}

const GroupInBlock = ({
  children,
  label,
  className = '',
}: GroupInBlockProps) => {
  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      aria-label={`${label}-group`}
      role="group"
    >
      {children}
    </div>
  );
};

export default GroupInBlock;
