async function Fetch(mod, id = "") {
  const urlBase = "https://jsonplaceholder.typicode.com/posts";
  let url;
  let myHeaders = new Headers();
  let myInit = {
    method: mod,
    headers: myHeaders,
    mode: "cors"
  };
  mod === "GET" || mod === "POST" ? url=urlBase: url=`${urlBase}/:${id}`
  let myRequest = new Request(url, myInit);

 
  return await fetch(myRequest)
          
         
}

export default Fetch;
