import Image from "next/image";

import Container from "@/common/components/elements/Container";

const Home = () => {
  return (
    <Container
      id="beranda"
      data-aos="fade-up"
      className="relative flex h-screen flex-col items-center justify-center gap-y-1"
    >
      <Image
        src={"/images/backgrounds/indonesia.png"}
        alt="Indonesia"
        fill={true}
        className="lg:object-fit object-none px-4 py-32 opacity-15"
      />
      <div className="absolute space-y-1 text-center lg:space-y-3">
        <h1 className="text-3xl font-medium uppercase text-neutral-900 dark:text-neutral-50 lg:text-6xl">
          Tech Culture
        </h1>
        <h1 className="text-2xl font-semibold uppercase text-red-500 lg:text-5xl">
          Indonesia
        </h1>
        <p className="text-neutral-900 dark:text-neutral-50 lg:text-2xl">
          Memelihara, Menyuarakan, dan Menjelajahi Kebudayaan Indonesia.
        </p>
      </div>
    </Container>
  );
};

export default Home;
