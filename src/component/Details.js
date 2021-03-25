const Details = (prop) => {
  //Shows the post that has been passed in the props
  return (
    <div className="m-3 rounded-sm shadow-md  w-full md: w-2/4 ">
      <div className="justify-between flex flex-col md:flex-row items-center bg-yellow-500 text-2xl p-5 font-sans">
        <h1>Detalles</h1>
        <button
          onClick={()=>prop.setCompRender("HOME")}
          className="bg-yellow-400 justify-center rounded-md text-xl m-1 p-2 font-sans"
        >
          Volver
        </button>
      </div>
      <div className="p-3 ">
        <h1 className="text-3xl m-5 text-center">{prop.firstLetterUpperCase(prop.post.title)}</h1>
        <h2 className="text-lg">{prop.firstLetterUpperCase(prop.post.body)}</h2>
      </div>
    </div>
  );
};

export default Details;
