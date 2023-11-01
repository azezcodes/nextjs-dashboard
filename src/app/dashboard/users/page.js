"use client";
import Todo from "@/components/Todo";
import Users from "@/components/Users";
import { useState, useEffect } from "react";

const page = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [image, setImage] = useState(undefined);
  const [fileds, setFields] = useState({
    title: "",
    desc: "",
  });
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://reqres.in/api/users/");
      const data = await res.json();
      // setUsers(data);
      setUsers(data.data);
    };
    fetchUsers();
  }, []);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fileds, [name]: value });
  };
  const handleSave = () => {
    const newItems = { ...fileds, image };
    setTodos([...todos, newItems]);
  };
  const handleFileClick = () => {
    document.getElementById("fileInput").click();
  };
  console.log(fileds);
  return (
    <section className="flex flex-col md:flex-row gap-4 w-full h-auto justify-between items-center">
      <div className="h-auto w-64 flex flex-col py-2 px-3 border my-3 gap-2">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-gray-400 text-xs">
            title
          </label>
          <input
            type="text"
            placeholder="add title"
            className="outline-none w-full border rounded-md px-1 text-sm  py-1"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-gray-400 text-xs">
            description
          </label>
          <textarea
            type="text"
            placeholder="add description"
            className="outline-none w-full border rounded-md px-1 text-sm py-1"
            rows={7}
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row gap-1 items-center">
          <div
            className="relative h-10 w-10 rounded-full bg-gray-300"
            onClick={handleFileClick}
          >
            {image && <img src={image} className="h-10 w-10 rounded-full" />}
          </div>
          {!image && <label>Select an image</label>}
          <input
            type="file"
            hidden
            id="fileInput"
            onChange={handleFileChange}
          />
        </div>
        <button
          className="bg-sky-600 rounded-md px-2 py-1 max-w-[200px] relative mx-auto text-white"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="flex-1 flex-wrap flex-row h-auto my-3 flex   gap-2 ">
        <Todo todos={todos} users={users} />
      </div>
      <div className="hidden h-auto my-3 md:flex flex-col w-40  gap-2 border shadow-md fixed right-0 z-49">
        <Users data={users} />
      </div>
    </section>
  );
};

export default page;
