import { ABOUT } from "@/common/constants/about";

const Introduction = () => {
  return (
    <section className="space-y-4 px-0 text-center leading-[1.8] text-neutral-900 dark:text-neutral-400 lg:px-32">
      {ABOUT.map((paragraph, index) => (
        <div key={index}>{paragraph}</div>
      ))}
    </section>
  );
};

export default Introduction;
