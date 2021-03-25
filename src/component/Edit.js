const Edit = (prop) => {
    //Shows the post that has been passed in the props
    return (
      <div className="m-3 p-2 shadow-md w-2/4 md:w-full ">
        <div className="justify-between items-center bg-yellow-500 text-2xl p-5 font-sans">
          <h1>Editar</h1>
          <button
            onClick={()=>prop.setCompRender("HOME")}
            className="bg-yellow-400 justify-center rounded-md text-xl m-1 p-2 font-sans"
          >
            Volver
          </button>
        </div>
        <div>
          <h1>{prop.firstLetterUpperCase(prop.post.title)}</h1>
          <h2>{prop.firstLetterUpperCase(prop.post.body)}</h2>
        </div>
      </div>
    );
  };
  
  export default Edit;
  