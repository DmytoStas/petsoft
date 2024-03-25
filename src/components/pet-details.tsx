"use client";

import { usePetContext } from "@/lib/hooks";
import { type Pet } from "@/lib/types";
import Image from "next/image";
import PetBtn from "./pet-btn";

type Props = {
  pet: Pet;
};

export default function PetDetails() {
  const { selectedPet } = usePetContext();

  return (
    <section className="flex flex-col w-full h-full">
      {!selectedPet ? (
        <EmptyView />
      ) : (
        <>
          <TopBar pet={selectedPet} />

          <OtherInfo pet={selectedPet} />

          <Notes pet={selectedPet} />
        </>
      )}
    </section>
  );
}

function EmptyView() {
  return (
    <p className="flex h-full justify-center items-center text-xl font-medium">
      No pet selected
    </p>
  );
}

function TopBar({ pet }: Props) {
  const { handleCheckoutPet } = usePetContext();
  return (
    <div className="flex items-center bg-white px-8 py-5 border-b border-light">
      <Image
        src={pet?.imageUrl}
        alt="Slected pet image"
        height={75}
        width={75}
        className="h-[75px] w-[75px] rounded-full object-cover"
      />

      <h2 className="text-3xl font-semibold leading-7 ml-5">{pet?.name}</h2>

      <ul className="flex ml-auto gap-2">
        <li>
          <PetBtn actionType="edit">Edit</PetBtn>
        </li>
        <li>
          <PetBtn
            actionType="checkout"
            onClick={() => handleCheckoutPet(pet.id)}
          >
            Checkout
          </PetBtn>
        </li>
      </ul>
    </div>
  );
}

function OtherInfo({ pet }: Props) {
  return (
    <ul className="flex justify-around py-10 px-5 text-center">
      <li>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Owner name
        </h3>
        <p className="mt-1 text-lg text-zinc-800">{pet?.ownerName}</p>
      </li>

      <li>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">Age</h3>
        <p className="mt-1 text-lg text-zinc-800">{pet?.age}</p>
      </li>
    </ul>
  );
}

function Notes({ pet }: Props) {
  return (
    <section className="flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-light">
      {pet?.notes}
    </section>
  );
}
