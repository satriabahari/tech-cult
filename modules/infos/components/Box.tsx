interface BoxProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export default function Box({ title, description, icon }: BoxProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-y-2">
      <div className="w-fit rounded-xl bg-red-500 p-2 text-neutral-50">
        {icon}
      </div>
      <h3 className="font-medium text-red-500">{title}</h3>
      <p className="text-sm text-neutral-900">{description}</p>
    </div>
  );
}
