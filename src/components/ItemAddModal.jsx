import React, { useContext, useState } from "react";
import { CgClose } from "react-icons/cg";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

//context
import { NoteContext } from "../context/NoteProvider";

const ItemAddModal = ({ listName }) => {
  const { isAddOpen, setIsAddOpen, list, setList } = useContext(NoteContext);
  const [noteInput, setNoteInput] = useState("");
  const [noteTime, setNoteTime] = useState("");

  const handleSubmit = () => {
    setList({
      ...list,
      [listName]: {
        ...list[listName],
        tasks: [
          ...list[listName].tasks,
          { id: uuidv4(), note: noteInput, time: noteTime },
        ],
      },
    });
    setIsAddOpen(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-9/12 md:w-6/12 lg:w-4/12 px-3"
    >
      <div className="flex flex-col bg-white rounded p-4">
        <div className="flex items-center justify-between mb-4 text-lg sm:text-xl">
          <h1 className="font-semibold">New Note</h1>
          <button onClick={() => setIsAddOpen(false)}>
            <CgClose />
          </button>
        </div>
        <div className="flex flex-col mb-3">
          <textarea
            className="border rounded border-gray-300 mb-4 max-h-36 min-h-3 h-36"
            placeholder="Type Note"
            type="text"
            onChange={(e) => setNoteInput(e.target.value)}
          />
          <input
            className="border rounded border-gray-300"
            placeholder="Type Time"
            type="text"
            onChange={(e) => setNoteTime(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={() => handleSubmit()}
            className="px-5 py-2 bg-blueColor rounded text-white"
          >
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemAddModal;
