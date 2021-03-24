import { Fragment, useState, useEffect } from "react";
import Fetch from "../services/Fetch";

function Home() {
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);

  //Fetch the array of json data of post's
  useEffect(() => {
    Fetch("GET")
      .then((res) => res.json())
      .then((dat) => setData(dat))
      .catch("Error");
  }, []);

  //Creates the row of the post, showing only the titles
  useEffect(() => {
    if (data.length > 0) {
      setRows(
        data.map((a) => {
          return (
            <li
              key={a.id}
              className="flex flex-col justify-between md:flex-row bg-yellow-300 justify-center rounded-md items-center m-3 p-2 shadow-md font-sans "
            >
              <h2 className=" text-xl p-2 font-sans">
                {firstLetterUpperCase(a.title)}
              </h2>
              <div >
                <button className="bg-yellow-400 justify-center rounded-md text-xl m-1 p-2 font-sans">
                  Detalles
                </button>
                <button className="bg-yellow-400 justify-center rounded-md text-xl m-1 p-2 font-sans">
                  Editar
                </button>
                <button className="bg-red-600 justify-center rounded-md text-xl m-1 p-2 font-sans">
                  Eliminar
                </button>
              </div>
            </li>
          );
        })
      );
    }
  }, [data]);

  const firstLetterUpperCase = (str) =>
    str.charAt(0).toUpperCase().concat(str.substring(1, str.length));

  return (
    <Fragment>
      <header className="justify-center items-center bg-yellow-500 text-2xl p-5 font-sans">
        <h1>Home</h1>
      </header>
      <main className="justify-center items-center p-2 font-sans">
        <ul>
          {rows.length > 0 ? (
            rows.map((a) => a)
          ) : (
            <li className="justify-center items-center bg-yellow-500 text-lg p-2 font-sans">
              <h2>Without post for now ...</h2>
            </li>
          )}
        </ul>
      </main>
    </Fragment>
  );
}

export default Home;
