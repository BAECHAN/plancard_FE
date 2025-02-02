const Image = ({
  src,
  alt,
  className,
  color,
}: {
  src: string;
  alt: string;
  color?: string;
  className?: string;
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      color={color}
      onError={e =>
        (e.currentTarget.src = `${import.meta.env.BASE_URL}images/no-image.svg`)
      }
    />
  );
};

export default Image;
