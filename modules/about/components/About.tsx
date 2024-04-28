import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/Heading";
import React from "react";
import Introduction from "./Introduction";

export default function About() {
  return (
    <Container id="tentang" data-aos="fade-up" className="min-h-screen h-full mb-12">
      <PageHeading title="Tentang" />
      <Introduction />
    </Container>
  );
}
