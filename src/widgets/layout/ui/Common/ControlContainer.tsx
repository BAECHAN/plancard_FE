interface ControlContainerProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

const ControlContainer = ({
  children,
  className = '',
  label,
}: ControlContainerProps) => {
  return (
    <section
      className={`flex flex-col gap-2 ${className}`}
      role="region"
      aria-label={label}
    >
      {children}
    </section>
  );
};

export default ControlContainer;
