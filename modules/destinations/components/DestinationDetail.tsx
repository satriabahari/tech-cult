import Image from "next/image";
import { IoClose as CloseIcon } from "react-icons/io5";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

interface DestinationDetailProps {
  id: number;
  title: string;
  description: string;
  location: string;
  by: string;
  image: string;
  length_journey: string;
  popular_activity: string[];
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const DestinationDetail = ({
  description,
  title,
  image,
  location,
  by,
  length_journey,
  popular_activity,
  isOpen,
  setIsOpen,
}: DestinationDetailProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70" />

        <div className="fixed inset-0 flex items-center justify-center ">
          <DialogPanel className=" w-[600px]  rounded-lg bg-white p-4 dark:bg-neutral-800">
            <button
              onClick={() => setIsOpen(false)}
              className="mb-2 flex w-full items-end justify-end overflow-hidden transition duration-300 hover:text-red-500"
            >
              <CloseIcon size={25} />
            </button>
            <div className="max-h-[32rem] space-y-4 overflow-y-auto">
              <DialogTitle className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                {title}
              </DialogTitle>
              <Description className="text-neutral-700 dark:text-neutral-400">
                {description}
              </Description>
              <div>
                <h3 className="text-lg font-medium">Lokasi:</h3>
                <p className="text-neutral-700 dark:text-neutral-400">
                  {location}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Waktu Perjalanan:</h3>
                <p className="text-neutral-700 dark:text-neutral-400">
                  {length_journey}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Aktivitas: </h3>
                <ul className="list-disc text-neutral-700 dark:text-neutral-400">
                  {popular_activity.map((activity: string, index: number) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
              <Image src={image} alt={title} width={600} height={600} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default DestinationDetail;
