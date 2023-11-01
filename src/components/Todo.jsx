import React from "react";

const Todo = ({ todos, users }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <div
          className="rounded-md flex flex-row w-full max-w-[280px] h-28 border shadow-lg bg-white 
            px-2 gap-2 hover:shadow-2xl transition-shadow duration-100 ease-linear"
          key={index}
        >
          <div className=" relative my-auto h-20 w-20 min-w-[80px] shadow-md rounded-md p-1 border">
            <img
              src={todo.image}
              className="h-full w-full rounded-tl-md object-cover"
              alt="image"
            />
          </div>
          <div className="mt-6 flex flex-col">
            <h4 className="text-sm font-poppins font-semibold text-black">
              {todo.title}
            </h4>
            <p className="w-full text-sm   whitespace-normal max-h-14 overflow-hidden text-[400] text-gray-400">
              {todo.desc}
            </p>
          </div>
        </div>
      ))}
      {/* <div className="flex mb-5 -space-x-4">
        {users.slice(0, 4).map((user, index) => (
          <img
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            style={{ left: index * 15 + "px" }}
            src={user.avatar}
            key={index}
          />
        ))}
      </div> */}
    </>
  );
};

export default Todo;
