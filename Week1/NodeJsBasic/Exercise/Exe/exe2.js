const getData = async (id) => {
    let [resUsers, restPosts, resComments, getPostById, getCommentById] = await Promise.all([
        getApi("https://jsonplaceholder.typicode.com/users"),
        getApi("https://jsonplaceholder.typicode.com/posts"),
        getApi("https://jsonplaceholder.typicode.com/comments"),
        getApi(`https://jsonplaceholder.typicode.com/posts/${id}`),
        getApi(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      ]);
      console.log(resUsers)
    return {
        resUsers, restPosts, resComments, getPostById, getCommentById
    }
    
}
module.exports = {resUsers, restPosts, resComments, getPostById, getCommentById}