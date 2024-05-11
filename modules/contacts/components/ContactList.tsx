import ContactCard from "./ContactCard";

import { CONTACTS } from "@/common/constants/contacts";

const ContactList = () => {
  const filteredSocialMedia = CONTACTS?.filter((social) => social?.isShow);
  return (
    <div className="flex flex-col gap-4">
      {filteredSocialMedia.map((media) => (
        <ContactCard key={media.title} {...media} />
      ))}
    </div>
  );
};

export default ContactList;
