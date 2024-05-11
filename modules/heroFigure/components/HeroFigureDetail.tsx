import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";
import { IoClose as CloseIcon } from "react-icons/io5";

interface HeroFigureDetailProps {
  id: number;
  name: string;
  date_of_birth: string;
  place_of_birth: string;
  date_of_death: string;
  place_of_death: string;
  description: string;
  image: string;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const HeroFigureDetail = ({
  name,
  date_of_birth,
  place_of_birth,
  date_of_death,
  place_of_death,
  description,
  image,
  isOpen,
  setIsOpen,
}: HeroFigureDetailProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <div className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 flex items-center justify-center ">
          <DialogPanel className=" w-[600px] rounded-lg bg-white p-4 ">
            <button
              onClick={() => setIsOpen(false)}
              className="mb-2 flex w-full items-end justify-end overflow-hidden transition duration-300 hover:text-red-500"
            >
              <CloseIcon size={25} />
            </button>
            <div className="max-h-[32rem] space-y-4 overflow-y-auto">
              <DialogTitle className="text-2xl font-semibold text-neutral-900">
                {name}
              </DialogTitle>
              <Description className="text-neutral-700">
                {description}
              </Description>
              <ul className="text-neutral-700 list-disc">
                <li>Tempat, tanggal lahir : {place_of_birth}, {date_of_birth}</li>
                <li>Tempat, tanggal wafat : {place_of_death}, {date_of_death}</li>
              </ul>
              <Image src={image} alt={name} width={600} height={600} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default HeroFigureDetail;
