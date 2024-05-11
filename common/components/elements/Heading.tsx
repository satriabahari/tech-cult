interface PageHeadingProps {
  title?: string;
  description?: string;
}

const PageHeading = ({ title, description }: PageHeadingProps) => {
  return (
    <div className="mb-12 space-y-1 text-center">
      <h2 className="text-neutral-900 dark:text-neutral-50 text-4xl font-medium">{title}</h2>
      <p className="text-sm text-neutral-900">{description}</p>
    </div>
  );
}

export default PageHeading;
