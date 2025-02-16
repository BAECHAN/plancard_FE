interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

const ContentContainer = ({
  children,
  className = '',
  label,
}: ContentContainerProps) => {
  return (
    <section
      className={`flex flex-col gap-4 ${className} h-full`}
      role="region"
      aria-label={label}
    >
      {children}
    </section>
  );
};

export default ContentContainer;
