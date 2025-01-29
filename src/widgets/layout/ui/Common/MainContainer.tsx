interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MainContainer = ({ children, className = '' }: MainContainerProps) => {
  return (
    <main
      className={`flex flex-col gap-10 ${className}`}
      role="main"
    >
      {children}
    </main>
  );
};

export default MainContainer;
