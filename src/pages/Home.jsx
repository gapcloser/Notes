import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//components
import Header from "../components/Header";
import Card from "../components/Card";
import ListAddModal from "../components/ListAddModal";
import PlusButton from "../components/PlusButton";

//context
import { NoteContext } from "../context/NoteProvider";

const Home = () => {
  const { list } = useContext(NoteContext);
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ x: -3000, transition: { duration: 0.2 } }}
    >
      <Header />
      <div className="px-4 sm:px-20 md:px-36 lg:px-72 grid grid-flow-row grid-cols-2 sm:grid-cols-3 gap-5">
        {Object.keys(list).map((ListItem, index) => (
          <Card
            id={list[ListItem].id}
            title={list[ListItem].title}
            icon={list[ListItem].icon}
            color={list[ListItem].color}
            tasks={list[ListItem].tasks}
            index={index}
            ListItem={ListItem}
          />
        ))}
      </div>

      <ListAddModal />
      <PlusButton />
    </motion.div>
  );
};

export default Home;
