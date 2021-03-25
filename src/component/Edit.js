import { useState } from "react";
import Fetch from "../services/Fetch";

const Edit = (prop) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    id: prop.post.id,
    userId: prop.post.userId
  });

  const controllChange = (p) => {
    setPost({ ...post, [p.target.name]: p.target.value });
  };
  

  async function editPost() {
    await Fetch("PUT", prop.post.id, post)
      .then((res) => res.json())
      .then((dat) => console.log("dat:", dat))
      .catch("Update error");
    let dat= prop.data.map((a) => a.id == post.id ? post : a )
    prop.setData(dat);
    alert("Post editado");
    prop.setCompRender("HOME");
  }

  //Take the data for make a new post
  return (
    <div className="m-3 p-2 shadow-md w-full ">
      <div className="justify-between flex flex-col md:flex-row items-center bg-yellow-500 text-2xl p-5 font-sans">
        <h1>Editar</h1>
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
          onClick={() => editPost()}
          className="bg-yellow-400 justify-center rounded-md text-xl m-1 p-2 font-sans hover:bg-yellow-500 transition-colors"
        >
          Editar post
        </button>
      </div>
    </div>
  );
};
export default Edit;
