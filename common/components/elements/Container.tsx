type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  [propName: string]: React.ReactNode | string | undefined;
};

export default function Container({
  children,
  className = "",
  ...others
}: ContainerProps) {
  return (
    <section className={`p-4 ${className} `} {...others}>
      {children}
    </section>
  );
}
