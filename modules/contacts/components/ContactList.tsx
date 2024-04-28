import { CONTACTS } from "@/common/constants/contacts";
import ContactCard from "./ContactCard";

export default function ContactList() {
  const filteredSocialMedia = CONTACTS?.filter((social) => social?.isShow);
  return (
    <div className="gap-4 flex flex-col">
      {filteredSocialMedia.map((media) => (
        <ContactCard key={media.title} {...media} />
      ))}
    </div>
  );
}
