import React from "react";

const Users = ({ data }) => {
  return (
    <>
      <label className="text-sm text-black font-poppins text-center mt-2">
        Contributors
      </label>
      {data.map((user, index) => (
        <div
          className="flex rounded-md w-48 items-center px-2 justify-start py-1 bg-white gap-1"
          key={index}
        >
          <img
            src={user.avatar}
            className="h-8 w-8 rounded-full bg-contain p-1 border"
            alt="avatar"
          />
          <h4 className="text-gray-400 font-semibold text-xs font-poppins">
            {user.first_name.concat(" ", user.last_name)}
          </h4>
        </div>
      ))}
    </>
  );
};

export default Users;
