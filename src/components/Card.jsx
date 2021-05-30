import React, { useContext } from "react";
import { HiMinus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//context
import { NoteContext } from "../context/NoteProvider";

const Card = ({ title, icon, color, tasks, index, ListItem, id }) => {
  const { list, setList } = useContext(NoteContext);
  // const handleCardRemove = (e) => {
  //   e.preventDefault();
  //   delete console.log(list[ListItem]);
  // };
  return (
    <Link key={index} to={ListItem}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white shadow-lg rounded-md p-4 relative"
      >
        <div style={{ color: color }} className="text-4xl">
          {icon}
        </div>
        <h2 className="font-semibold mt-6">{title}</h2>
        <p className="mt-2 font-light text-sm text-gray-400">
          {tasks.length} tasks
        </p>
        {/* <button
          onClick={(e) => handleCardRemove(e)}
          className="focus:outline-none absolute z-20 top-3 right-3 text-2xl text-red-400"
        >
          <lord-icon
            src="https://cdn.lordicon.com/gsqxdxog.json"
            trigger="loop-on-hover"
            colors="primary:#fa881c,secondary:#f4a09c"
            style={{ width: "30px", height: "30px" }}
            stroke="90"
          ></lord-icon>
        </button> */}
      </motion.div>
    </Link>
  );
};

export default Card;
