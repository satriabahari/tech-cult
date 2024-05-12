import { IoClose as CloseIcon } from "react-icons/io5";
import Image from "next/image";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

interface FoodDetailProps {
  id: number;
  name: string;
  description: string;
  origin: string;
  image: string;
  ingredients: string[];
  instructions: string;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const FoodDetail = ({
  id,
  name,
  description,
  origin,
  image,
  ingredients,
  instructions,
  isOpen,
  setIsOpen,
}: FoodDetailProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70" />

        <div className="fixed inset-0 flex items-center justify-center">
          <DialogPanel className=" w-[600px] rounded-lg bg-white p-4 dark:bg-neutral-800">
            <button
              onClick={() => setIsOpen(false)}
              className="mb-2 flex w-full items-end justify-end overflow-hidden transition duration-300 hover:text-red-500"
            >
              <CloseIcon size={25} />
            </button>
            <div className="max-h-[32rem] space-y-4 overflow-y-auto">
              <DialogTitle className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                {name}
              </DialogTitle>
              <Description className="text-neutral-700 dark:text-neutral-400">
                {description}
              </Description>
              <div>
                <h3 className="font-medium text-lg">Asal: </h3>
                <p className="text-neutral-700 dark:text-neutral-400">{origin}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Bahan-Bahan:</h3>
                <ul>
                  {ingredients.map((ingredient, index) => (
                    <li key={index} className="text-neutral-700 dark:text-neutral-400">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium">Intruksi Memasak:</h3>
                <p className="text-neutral-700 dark:text-neutral-400">{instructions}</p>
              </div>
              <Image src={image} alt={name} width={600} height={600} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default FoodDetail;
