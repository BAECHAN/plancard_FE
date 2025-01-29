interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ContentContainer = ({
  children,
  className = '',
}: ContentContainerProps) => {
  return (
    <section
      className={`flex flex-col gap-4 ${className}`}
      role="region"
      aria-label="content-section"
    >
      {children}
    </section>
  );
};

export default ContentContainer;
