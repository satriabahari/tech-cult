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
    <section className={`py-4 px-6 lg:px-24 scroll-mt-24 lg:scroll-mt-28 ${className} `} {...others}>
      {children}
    </section>
  );
}
