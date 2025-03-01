import React from "react";

const Todo = () => {
  return (
    <div className="py-20 max-w-96 mx-auto">
      <h2 className="text-center text-2xl font-semibold">Todo App</h2>
      <div>
        <form className="text-center mt-4">
          <input
            type="text"
            placeholder="Add a new task"
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
    </div>
  );
};

export default Todo;
