import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import voca from "voca";
import { motion, AnimatePresence } from "framer-motion";

//icons
import { CgClose } from "react-icons/cg";
import * as Icons from "react-icons/bi";

//randomcolor
import randomcolor from "randomcolor";

//context
import { NoteContext } from "../context/NoteProvider";

const IconNames = Object.keys(Icons);

const ListAddModal = () => {
  const { isModalOpen, setIsModalOpen, list, setList } =
    useContext(NoteContext);
  const [icons, setIcons] = useState([]);
  const [data, setData] = useState({
    id: uuidv4(),
    icon: null,
    title: "",
    tasks: [],
    color: randomcolor(),
  });
  console.log(data);

  const SearchIcon = (e) => {
    let results = [];
    results = IconNames.filter((name) => name.includes(e));
    setIcons(results.slice(0, 4));
  };

  const handleSubmit = () => {
    let key = voca.kebabCase(data.title);
    setList({ ...list, [key]: data });
    setIsModalOpen(false);
  };
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-9/12 md:w-6/12 lg:w-4/12 px-3"
        >
          <div className="flex flex-col bg-white rounded p-4">
            <div className="flex items-center justify-between mb-4 text-lg sm:text-xl">
              <h1 className="font-semibold">New List</h1>
              <button onClick={() => setIsModalOpen(false)}>
                <CgClose />
              </button>
            </div>
            <div className="flex flex-col mb-3">
              <input
                className="border rounded border-gray-300 mb-4"
                placeholder="Type Name"
                type="text"
                onChange={(e) => setData({ ...data, title: e.target.value })}
                maxLength="11"
              />
              <input
                className="border rounded border-gray-300"
                placeholder="Search for Icon"
                type="text"
                onChange={(e) => SearchIcon(e.target.value.toLowerCase())}
              />
            </div>
            <div className="flex my-2">
              {icons.map((icon) => {
                const FiIcon = Icons[icon];
                return (
                  <button
                    onClick={() =>
                      setData({
                        ...data,
                        i: icon,
                        icon: <FiIcon />,
                      })
                    }
                    className={`${
                      data.i === icon
                        ? "bg-blue-300 text-blue-500"
                        : "bg-blueColor text-white"
                    } transition duration-200 focus:outline-none text-2xl w-10 h-10 rounded-full mr-3 flex items-center justify-center text-white`}
                  >
                    <FiIcon />
                  </button>
                );
              })}
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
      )}
    </AnimatePresence>
  );
};

export default ListAddModal;
