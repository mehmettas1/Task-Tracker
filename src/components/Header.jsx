import AddTaskForm from "./AddTaskForm";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  const [btnStyle, setBtnStyle] = useState({
    name: "SHOW ADD TASK BAR",
    bgColor: "purple",
  });

  //? 📢 React doesn't update states instantly, it updates them in bulk. States are updated with async logic to avoid over-rendering
  const handleShow = () => {
    if (show) {
      setBtnStyle({
        name: "SHOW ADD TASK BAR",
        bgColor: "purple",
      });
    } else {
      setBtnStyle({
        name: "CLOSE ADD TASK BAR",
        bgColor: "red",
      });
    }
    setShow(!show);
  };

  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <button
        onClick={handleShow}
        className="btn"
        style={{ backgroundColor: btnStyle.bgColor }}
      >
        {btnStyle.name}
      </button>
      {show && <AddTaskForm />}
    </header>
  );
};

export default Header