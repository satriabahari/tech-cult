import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/Heading";
import React from "react";
import LombaList from "./EventList";

export default function Events() {
  return (
    <Container id="lomba" data-aos="fade-up" className="mb-16">
      <PageHeading title="Lomba" />
      <LombaList />
    </Container>
  );
}
