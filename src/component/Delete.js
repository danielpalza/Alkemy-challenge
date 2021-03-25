import Fetch from "../services/Fetch";

const Delete = (prop) => {
 
  //Make the request to the API for the delete of the post
  const deletePost = () => {
    Fetch("DELETE", prop.post.id)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch("Error delete.");
    prop.setData(prop.data.filter(a=>{
       return a.id!==prop.post.id
    }))

    alert("Post eliminado.")
    prop.setCompRender("HOME");
  };

  //Shows the post that has been passed in the props
  return (
    <div className="m-3 rounded-sm shadow-md w-full md: w-2/4 ">
      <div className="justify-between items-center bg-yellow-500 text-2xl p-5 font-sans">
        <h1>Delete</h1>
      </div>
      <div className="flex-col flex justify-center items-center p-5">
        <h1 className="text-xl ">¿Desea borrar este post?</h1>
        <div className="">
          <button
            onClick={() => deletePost()}
            className="bg-yellow-400 justify-center rounded-md text-xl m-1 p-2 font-sans"
          >
            Eliminar
          </button>
          <button
            onClick={() => prop.setCompRender("HOME")}
            className="bg-yellow-400 justify-center rounded-md text-xl m-1 p-2 font-sans"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
