import Container from "@/common/components/elements/Container";

export default function Home() {
  return (
    <Container className="flex h-screen flex-col items-center justify-center gap-y-1">
      <h1 className="text-3xl font-medium uppercase text-neutral-900">
        Budaya Nusantara
      </h1>
      <h1 className="text-3xl font-semibold uppercase text-red-500">Indonesia</h1>
      <p>
        <span className="font-semibold">Pulih</span> lebih cepat,{" "}
        <span className="font-semibold">Bangkit</span> lebih kuat.
      </p>
    </Container>
  );
}
