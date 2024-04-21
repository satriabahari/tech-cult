import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/Heading";
import React from "react";
import LombaList from "./LombaList";

export default function Lombas() {
  return (
    <Container>
      <PageHeading title="Lomba" />
      <LombaList />
    </Container>
  );
}
