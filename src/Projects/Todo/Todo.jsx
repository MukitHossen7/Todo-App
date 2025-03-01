import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (value) => {
    setInputValue(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) {
      toast.error("Task cannot be empty!");
      return;
    }
    if (inputValue) {
      const taskValue = tasks.find((task) => task == inputValue);
      if (taskValue) {
        toast.error("Task already exists!");
        setInputValue("");
        return;
      }
    }
    if (inputValue) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
      toast.success("Task added successfully!");
    }
  };
  console.log(tasks);
  return (
    <div className="py-20 max-w-96 mx-auto">
      <h2 className="text-center text-2xl font-semibold">Todo App</h2>
      <div>
        <form onSubmit={handleFormSubmit} className="text-center mt-4">
          <input
            type="text"
            placeholder="Add a new task"
            value={inputValue}
            onChange={(event) => handleInputValue(event.target.value)}
            className="border border-[#1E293B] rounded-l-md  py-1 px-2"
          />
          <button
            className="bg-[#1E293B] text-gray-100 py-[5px] px-3 rounded-r-md font-medium"
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Todo;
