import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/Heading";
import React from "react";
import Introduction from "./Introduction";

export default function About() {
  return (
    <Container id="about">
      <PageHeading title="About" />
      <Introduction />
    </Container>
  );
}
