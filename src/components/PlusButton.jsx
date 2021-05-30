import React, { useContext } from "react";

//icons
import { AiOutlinePlus } from "react-icons/ai";

//context
import { NoteContext } from "../context/NoteProvider";

const PlusButton = () => {
  const { isModalOpen, setIsModalOpen } = useContext(NoteContext);
  return (
    <button
      onClick={() => setIsModalOpen(true)}
      className="z-20 absolute w-12 h-12 sm:w-14 sm:h-14 sm:text-3xl text-2xl bg-blue-500 text-white rounded-full bottom-8 right-8 flex items-center justify-center"
    >
      <AiOutlinePlus />
    </button>
  );
};

export default PlusButton;
