import { useState } from 'react';

const AddTaskForm = () => {
  const [task, setTask] = useState('');
  const [day, setDay] = useState('');

  return (
    <div>
      <form>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="add task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input
            type="date"
            name="day"
            id="day"
            placeholder="Day & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;