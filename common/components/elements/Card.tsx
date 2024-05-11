interface CardProps {
  children: React.ReactNode;
  className?: string;
  [propName: string]: unknown;
}

const Card = ({ children, className, ...others }: CardProps) => {
  return (
    <div className={`rounded-xl ${className}`} {...others}>
      {children}
    </div>
  );
};

export default Card;
