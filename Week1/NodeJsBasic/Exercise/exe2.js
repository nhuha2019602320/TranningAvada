const getApi = async (url) => {
    const res = await fetch(url)
    return res.json();
}
//GetApiUsers
// GetApi('https://jsonplaceholder.typicode.com/users').then(res => console.log(res))

// export default GetApi;
module.exports = {getApi}