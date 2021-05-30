import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
//icons
import {
  MdContentPaste,
  MdMailOutline,
  MdMusicNote,
  MdLocalAirport,
  MdBook,
  MdHome,
} from "react-icons/md";

export const NoteContext = createContext();

export const NoteProvider = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const [list, setList] = useState({
    home: {
      id: uuidv4(),
      title: "Home",
      color: "#5786ff",
      icon: <MdContentPaste />,
      tasks: [
        {
          id: uuidv4(),
          note: "Fix the light bulb",
          time: "11:00",
        },
        {
          id: uuidv4(),
          note: "Find phone charger",
          time: "21:00",
        },
      ],
    },
    work: {
      id: uuidv4(),
      title: "Work",
      color: "#ffc93c",
      icon: <MdMailOutline />,
      tasks: [{ id: uuidv4(), note: "Update Windows", time: "21:00" }],
    },
    education: {
      id: uuidv4(),
      title: "Education",
      color: "#42a5d3",
      icon: <MdBook />,
      tasks: [{ id: uuidv4(), note: "Read Alchemist", time: "2:00" }],
    },
  });

  return (
    <NoteContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        list,
        setList,
        isAddOpen,
        setIsAddOpen,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
