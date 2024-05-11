const Footer = () => {
  return (
    <footer className="mt-12 flex w-full items-center justify-center gap-x-1 bg-red-500 py-2 text-sm text-neutral-50">
      <div>© {new Date().getFullYear()}</div>
      <div>Built with Next.js</div>
    </footer>
  );
};

export default Footer;
