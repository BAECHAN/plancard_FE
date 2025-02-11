interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MainContainer = ({ children, className = '' }: MainContainerProps) => {
  return <div className={`flex flex-col gap-10 ${className}`}>{children}</div>;
};

export default MainContainer;
