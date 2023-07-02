import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

  //! React, default olarak state'leri hemen degistirmeyebilir.
  //! Ekstra render'lari azaltmak icin state'leri toplu (batch) bir sekilde gunceller.
  //! Bir event handler icerisindeki ardasik state'ler event bitiminde toplu bir
  //! sekilde guncellenmis olur.State'lerin guncelenmesi gelis sirasina gorere yapilir.
  //! Ayni event icerisinde birbirine bagli state'leri kullanirken buna dikkat etmek gerkir.

const Header = ({tasks,setTasks}) => {
  const [control, setControl] = useState(true)

  const handleButton =()=>{
    setControl(!control);

  }
  return (
    <header>
      <h1>Task Tracker</h1>
      <button onClick={handleButton} type="button" className= {control ? "btn btn-danger" : "btn btn-success"}>
        {control ?  "Close Add Task Bar" : "Show Add Task Bar" }
      </button>
      {control && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
    </header>
  );
};

export default Header;
