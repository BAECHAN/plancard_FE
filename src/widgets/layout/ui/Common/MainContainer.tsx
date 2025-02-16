interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

const MainContainer = ({
  children,
  className = '',
  label,
}: MainContainerProps) => {
  return (
    <div
      className={`flex flex-col ${className}`}
      aria-label={label}
    >
      {children}
    </div>
  );
};

export default MainContainer;
