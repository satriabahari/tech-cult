import Container from "@/common/components/elements/Container";
import ContactForm from "./ContactForm";
import PageHeading from "@/common/components/elements/Heading";
import ContactList from "./ContactList";

export default function Contacts() {
  return (
    <Container id="kontak" data-aos="fade-up">
      <PageHeading title="Kontak" />
      <div className="grid grid-cols-1 gap-x-24 gap-y-8 lg:grid-cols-2">
        <ContactList />
        <ContactForm />
      </div>
    </Container>
  );
}
