import { useState } from 'react';
import AddTaskForm from './AddTaskForm';


const Header = () => {
 const  [show, setShow] = useState(false)


 const handleShow = () => {
  setShow(!show);
 }

  return <header>
    <h1>TASK TRACKER</h1>
    <button onClick={handleShow}>SHOW AND TASK BAR</button>
   {show && <AddTaskForm/>}
  </header>;
};

export default Header;
