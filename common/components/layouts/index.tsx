import Header from "./header/Header";
import Footer from "./partials/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layouts({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
