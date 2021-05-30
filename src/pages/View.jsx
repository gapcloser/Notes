import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import ItemAddModal from "../components/ItemAddModal";
import { motion } from "framer-motion";

//components
import ItemHeader from "../components/ItemHeader";
import Items from "../components/Items";

//context
import { NoteContext } from "../context/NoteProvider";

const View = () => {
  const location = useLocation();
  const { isAddOpen, setIsAddOpen } = useContext(NoteContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blueColor h-half"
    >
      <div
        className={`absolute w-full h-full bg-gray-200 opacity-60 ${
          isAddOpen ? "block" : " hidden"
        }`}
      ></div>
      <ItemHeader listName={location.pathname.slice(1)} />
      <Items listName={location.pathname.slice(1)} />
      <button
        onClick={() => setIsAddOpen(true)}
        className="bg-blueColor text-white px-5 py-2 rounded-lg absolute bottom-3 right-3"
      >
        Add Note
      </button>
      {isAddOpen && <ItemAddModal listName={location.pathname.slice(1)} />}
    </motion.div>
  );
};

export default View;
