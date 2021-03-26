//It makes a request to the API according to the way it will be used,
//the id (if needed) and / or the body
async function Fetch(mod, id = "", body = {}) {
  const urlBase = "https://jsonplaceholder.typicode.com/posts";
  let url;
  let myHeaders = new Headers();

  //Config the options for the request
  let myInit =
    mod === "GET"
      ? {
          method: mod,
          headers: myHeaders,
          mode: "cors",
        }
      : {
          method: mod,
          headers: myHeaders,
          mode: "cors",
          body: JSON.stringify(body),
        };

    
  /*Make the url to use, if the mod is "GET" and there is a "id" pass to fetch,
   or if the mod is "POST" there gonna be using the urlBase normal, but if there 
   is a "id", there gonna use a urlBase with the id*/
  mod === "GET" &&  id.length == 0 || mod === "POST"
    ? (url = urlBase)
    :(url = `${urlBase}/${id}`)
   
  let myRequest = new Request(url, myInit);
  return fetch(myRequest);
}

export default Fetch;
