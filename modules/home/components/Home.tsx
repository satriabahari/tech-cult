import Container from "@/common/components/elements/Container";
import useIsIntersectionObserver from "@/common/hooks/useIsIntersectionObserver";
import Image from "next/image";

export default function Home() {
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
        className="lg:object-fit object-none py-32 px-4 opacity-15"
      />
      <div className="absolute text-center lg:space-y-3 space-y-1">
        <h1 className="lg:text-5xl text-3xl font-medium uppercase text-neutral-900 dark:text-neutral-50">
          Budaya Nusantara
        </h1>
        <h1 className="lg:text-4xl text-2xl font-semibold uppercase text-red-500">
          Indonesia
        </h1>
        <p className="text-neutral-900 dark:text-neutral-50 lg:text-2xl">
          <span className="font-semibold">Pulih</span> lebih cepat,{" "}
          <span className="font-semibold">Bangkit</span> lebih kuat.
        </p>
      </div>
    </Container>
  );
}
