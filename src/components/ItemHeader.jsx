import React, { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

//context
import { NoteContext } from "../context/NoteProvider";

const ItemHeader = ({ listName }) => {
  const { list } = useContext(NoteContext);
  return (
    <div className="flex flex-col p-6 text-white text-2xl">
      <div className="flex items-center justify-between">
        <span>
          <Link to="/">
            <IoIosArrowBack />
          </Link>
        </span>
        <span>
          <BsThreeDotsVertical />
        </span>
      </div>
      <div className="flex flex-col mt-14 px-7">
        <div
          style={{ color: list[listName].color }}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
        >
          {list[listName].icon}
        </div>
        <h1 className="mt-6 font-extrabold text-3xl">{list[listName].title}</h1>
        <p className="text-base text-gray-200">
          {list[listName].tasks.length} tasks
        </p>
      </div>
    </div>
  );
};

export default ItemHeader;
