type LayoutProps = {
  children: React.ReactNode;
};

export default function Layouts({ children }: LayoutProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
