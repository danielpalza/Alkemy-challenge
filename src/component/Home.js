import { Fragment, useState, useEffect } from "react";
import Fetch from "../services/Fetch";

import Details from "./Details";
import Delete from "./Delete";
import Edit from "./Edit";
import Add from "./Add";

function Home() {
  //Is the json data that has come in the fetch
  const [data, setData] = useState([]);
  // Contains the data convert to components of react ready to show
  const [rows, setRows] = useState([]);
  // Is the post who has been selected to do a operation.
  const [post, setPost] = useState({
    id:""
  });
  // It controlles what component has to be showed
  const [compRender, setCompRender] = useState("HOME");

  //Fetch the array of json data of post's
  useEffect(() => {
    Fetch("GET")
      .then((res) => res.json())
      .then((dat) => {
        setData(dat);
      })
      .catch("Error");
  }, []);

  // Receives if a diferent component has to be showed, and load the post to use
  const loadPost = (comp, post) => {
    setCompRender(comp);
    setPost(post);
  };
  //Manage the id details request, if no exist, throw error
  async function manageIdEdit() {
    if (post.id.length > 0) {
      await Fetch("GET", post.id)
        .then((res) => res.json())
        .then((dat) => loadPost("EDIT", dat))
        .catch((error) => console.log("error: ",error));
    } else {
      alert("Ingrese un valor de Id valido.");
    }
  }

  //Manage the changes of text input in the state of post
  const controllChange = (p) => {
    setPost({ ...post, [p.target.name]: p.target.value });
  };

  //Creates the row of the post, showing only the titles
  useEffect(() => {
    if (data.length > 0) {
      setRows(
        data.map((a) => {
          return (
            <li
              key={a.id}
              className="flex flex-col justify-between md:flex-row bg-yellow-300 justify-center rounded-md items-center m-3 p-2 shadow-md transition-transform transform hover:scale-105   font-sans "
            >
              <h2 className=" text-xl p-2 font-sans">
                {firstLetterUpperCase(a.title)}
              </h2>
              <div>
                <button
                  onClick={() => loadPost("DETAILS", a)}
                  className="bg-yellow-400 justify-center rounded-md text-xl m-1 p-2 font-sans hover:bg-yellow-500 transition-colors"
                >
                  Detalles
                </button>
                <button
                  onClick={() => loadPost("EDIT", a)}
                  className="bg-yellow-400 justify-center rounded-md text-xl m-1 p-2 font-sans hover:bg-yellow-500 transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => loadPost("DELETE", a)}
                  className="bg-red-500 justify-center rounded-md text-xl m-1 p-2 font-sans hover:bg-red-600 transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </li>
          );
        })
      );
    }
  }, [data.length, data]);

  //Convert the first letter to upper case
  const firstLetterUpperCase = (str) =>
    str.charAt(0).toUpperCase().concat(str.substring(1, str.length));

  return (
    <Fragment>
      <header className="justify-between flex flex-col sm:flex-row items-center bg-yellow-500 text-2xl p-5 font-sans">
        <h1 className="text-4xl">Home</h1>
        <div className="flex flex-col m-1 sm:flex-row w-1/2 justify-center items-center">
          <button
            onClick={() => setCompRender("ADD")}
            className="bg-yellow-300 justify-center rounded-md text-xl m-1 p-2 font-sans hover:bg-yellow-400 transition-colors"
          >
            Agregar
          </button>
          <div className="flex  items-center ">
            <input
              type="text"
              name="id"
              className="p-1 m-3 rounded shadow-md w-1/3 sm:w-auto"
              placeholder="Id"
              onChange={controllChange}
            />
            <button
              onClick={() => manageIdEdit()}
              className="bg-yellow-300 justify-center  rounded-md text-xl m-1 p-2 font-sans hover:bg-yellow-400 transition-colors"
            >
              Editar
            </button>
            <button
              onClick={() => setCompRender("HOME")}
              className="bg-yellow-300 justify-center  rounded-md text-xl m-1 p-2 font-sans hover:bg-yellow-400 transition-colors"
            >
              Home
            </button>
          </div>
        </div>
      </header>
      <main className="justify-center items-center p-2 font-sans">
        {compRender === "HOME" ? (
          <ul>
            {rows.length > 0 ? (
              rows.map((a) => a)
            ) : (
              <li className="justify-center items-center bg-yellow-500 text-lg p-2 font-sans">
                <h2>Sin posts por ahora...</h2>
              </li>
            )}
          </ul>
        ) : compRender === "DETAILS" ? (
          <Details
            firstLetterUpperCase={firstLetterUpperCase}
            setCompRender={setCompRender}
            post={post}
          />
        ) : compRender === "EDIT" ? (
          <Edit
            firstLetterUpperCase={firstLetterUpperCase}
            setCompRender={setCompRender}
            data={data}
            setData={setData}
            post={post}
          />
        ) : compRender === "DELETE" ? (
          <Delete
            data={data}
            setData={setData}
            firstLetterUpperCase={firstLetterUpperCase}
            setCompRender={setCompRender}
            post={post}
          />
        ) : compRender === "ADD" ? (
          <Add data={data} setData={setData} setCompRender={setCompRender} />
        ) : (
          ""
        )}
      </main>
    </Fragment>
  );
}

export default Home;
