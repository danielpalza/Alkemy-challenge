
async function Fetch(mod, id = "", body = {}) {
  const urlBase = "https://jsonplaceholder.typicode.com/posts";
  let url;
  let myHeaders = new Headers();
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
  mod === "GET" || mod === "POST"
    ? (url = urlBase)
    : (url = `${urlBase}/${id}`);
  let myRequest = new Request(url, myInit);
  console.log("request:", myRequest)
  return await fetch(myRequest);
}

export default Fetch;
