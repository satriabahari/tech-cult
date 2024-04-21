interface PageHeadingProps {
  title?: string;
  description?: string;
}

export default function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <div className="mb-8 space-y-1 text-center">
      <h2 className="text-neutral-900 text-2xl font-medium">{title}</h2>
      <p className="text-sm text-neutral-900">{description}</p>
    </div>
  );
}
