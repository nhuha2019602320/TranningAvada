
const getApi = async (url) => {
const res = await fetch(url);
return res.json();
};

module.exports = getApi;