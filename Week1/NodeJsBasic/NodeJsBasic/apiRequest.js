async function GetApi(url) {
    const res = await fetch(url);
    return await res.json();
  }
   
 export default GetApi;
  