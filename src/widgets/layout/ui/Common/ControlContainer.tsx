interface ControlContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ControlContainer = ({
  children,
  className = '',
}: ControlContainerProps) => {
  return (
    <section
      className={`flex flex-col gap-2 ${className}`}
      role="region"
      aria-label="control-section"
    >
      {children}
    </section>
  );
};

export default ControlContainer;
