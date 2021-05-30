import React, { useContext } from "react";

//icons
import { MdDelete } from "react-icons/md";

//context
import { NoteContext } from "../context/NoteProvider";

const Item = ({ note, time, id, listName }) => {
  const { list, setList } = useContext(NoteContext);
  const handleItemRemove = () => {
    const newList = list[listName].tasks.filter((item) => item.id !== id);
    setList({ ...list, [listName]: { ...list[listName], tasks: newList } });
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h1 className="font-semibold">
          {note.length > 25 ? note.slice(0, 25).concat(". . .") : note}
        </h1>
        <span className="text-sm text-gray-400">{time}</span>
      </div>
      <div>
        <button
          onClick={() => handleItemRemove()}
          className="text-2xl focus:outline-none text-red-400"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Item;
