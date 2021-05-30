import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";

//context
import { NoteContext } from "./context/NoteProvider";

//pages
import Home from "./pages/Home";
import View from "./pages/View";

const App = () => {
  const { isModalOpen, setIsModalOpen } = useContext(NoteContext);

  return (
    <div className={isModalOpen ? "overflow-hidden" : ""}>
      <div
        className={`absolute w-full h-full bg-gray-200 opacity-60 ${
          isModalOpen ? "block" : " hidden"
        }`}
      ></div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:listName" component={View} />
      </Switch>
    </div>
  );
};

export default App;
