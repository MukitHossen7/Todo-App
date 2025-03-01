import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      const over = new Date();
      const dateData = over.toLocaleDateString();
      setDate(dateData);
      const timeData = over.toLocaleTimeString();
      setTime(timeData);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const handleDelete = (deleteData) => {
    const deleteValue = tasks.filter((data) => data !== deleteData);
    setTasks(deleteValue);
  };
  // console.log(tasks.length);
  return (
    <div className="py-20 max-w-96 mx-auto">
      <h2 className="text-center text-2xl font-semibold">Welcome Todo App</h2>
      <h3 className="text-center mt-3 font-medium">
        {date} - {time}
      </h3>
      <div>
        <form onSubmit={handleFormSubmit} className="text-center mt-4">
          <input
            type="text"
            placeholder="Add a new task"
            value={inputValue}
            autoComplete="off"
            onChange={(event) => handleInputValue(event.target.value)}
            className="border-2 border-[#1E293B] rounded-l-md  py-1 px-2 bg-gray-50 focus:rounded-l-md"
          />
          <button
            className="bg-[#1E293B] text-gray-100 py-[6px] px-3 rounded-r-md font-medium"
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
      <div>
        {tasks?.length === 0 && (
          <p className="text-center text-xl text-gray-800 font-medium mt-4">
            No tasks added yet.
          </p>
        )}
        <div className="flex flex-col gap-3 mt-4">
          {tasks?.map((task, index) => (
            <div
              className="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center"
              key={index}
            >
              <p className="font-medium">{task}</p>
              <div className="flex items-center gap-2">
                <button>
                  <FaCheckCircle className="text-green-400 text-lg" />
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => handleDelete(`${task}`)}
                >
                  <MdDeleteForever className="text-red-400 text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Todo;
