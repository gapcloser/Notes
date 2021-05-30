import React, { useContext } from "react";

//components
import Item from "../components/Item";

//context
import { NoteContext } from "../context/NoteProvider";

const Items = ({ listName }) => {
  const { list } = useContext(NoteContext);

  return (
    <div className="bg-white rounded-xl min-h-oneFour p-6">
      <h1 className="text-gray-300 mb-3">Notes</h1>
      {list[listName].tasks.length > 0
        ? list[listName].tasks.map((note, index) => (
            <Item
              key={index}
              id={note.id}
              note={note.note}
              time={note.time}
              listName={listName}
            />
          ))
        : "You haven't created any notes yet."}
    </div>
  );
};

export default Items;
