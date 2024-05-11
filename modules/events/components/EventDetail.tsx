import Image from "next/image";
import { IoClose as CloseIcon } from "react-icons/io5";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";


interface EventDetailProps {
  id: number;
  title: string;
  description: string;
  image: string;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const EventDetail = ({
  description,
  title,
  image,
  isOpen,
  setIsOpen,
}: EventDetailProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 flex items-center justify-center">
          <DialogPanel className=" w-[600px] rounded-lg bg-white p-4 ">
            <button
              onClick={() => setIsOpen(false)}
              className="mb-2 flex w-full items-end justify-end overflow-hidden transition duration-300 hover:text-red-500"
            >
              <CloseIcon size={25} />
            </button>
            <div className="max-h-[32rem] space-y-4 overflow-y-auto">
              <DialogTitle className="text-2xl font-semibold text-neutral-900">
                {title}
              </DialogTitle>
              <Description className="text-neutral-700">
                {description}
              </Description>
              <Image src={image} alt={title} width={600} height={600} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default EventDetail;
