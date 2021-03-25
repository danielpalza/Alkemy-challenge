import { useState } from "react";
import Fetch from "../services/Fetch";

const Add = (prop) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const controllChange = (p) => {
    setPost({ ...post, [p.target.name]: p.target.value });
  };

  async function addPost() {
    let id = await Fetch("POST")
      .then((res) => res.json())
      .then((dat) => dat.id)
      .catch("Create error");

    let data = prop.data;
    data.unshift({ ...post, id })
    prop.setData(data);
    alert("Post creado");
    prop.setCompRender("HOME");
  }

  //Take the data for make a new post
  return (
    <div className="m-3 p-2 shadow-md w-full ">
      <div className="justify-between flex flex-col md:flex-row items-center bg-yellow-500 text-2xl p-5 font-sans">
        <h1>Agregar</h1>
        <button
          onClick={() => prop.setCompRender("HOME")}
          className="bg-yellow-400 justify-center rounded-md text-xl m-1 p-2 font-sans"
        >
          Volver
        </button>
      </div>
      <div className="flex flex-col p-2">
        <input
          className="p-1 m-3 rounded shadow-md"
          type="text"
          placeholder="Titulo"
          name="title"
          onChange={controllChange}
        />
        <textarea
          className="p-1 m-3 rounded shadow-md"
          rows="5"
          placeholder="Cuerpo"
          name="body"
          onChange={controllChange}
        ></textarea>
        <button
          onClick={() => addPost()}
          className="bg-yellow-400 justify-center rounded-md text-xl m-1 p-2 font-sans hover:bg-yellow-500 transition-colors"
        >
          Agregar post
        </button>
      </div>
    </div>
  );
};

export default Add;
