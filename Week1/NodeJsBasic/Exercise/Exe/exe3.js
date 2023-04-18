const { getApi } = require("./exe1");
const { resUsers } = require("./exe2");
// const { resUsers,restPosts, resComments} = require('./exe2.js')

  async function MapDataWithUser(id) {
    console.log("resuser", resUsers)
    // let [resUsers, restPosts, resComments, getPostById, getCommentById] = await Promise.all([
    //   getApi("https://jsonplaceholder.typicode.com/users"),
    //   getApi("https://jsonplaceholder.typicode.com/posts"),
    //   getApi("https://jsonplaceholder.typicode.com/comments"),
    //   getApi(`https://jsonplaceholder.typicode.com/posts/${id}`),
    //   getApi(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    // ]);
  
    //--------------------------------exe4. Filter only users with more than 3 comments.-------------------------------------------
    const userFilter = resUsers.map((user) => {
      const postFilter = restPosts.filter((post) => post.userId === user.id);
      const commentFilter = postFilter.map((post) =>
        resComments.filter((comment) => post.id === comment.postId)
      );
      //    console.log("postFilter", postFilter)
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        comments: commentFilter,
        posts: postFilter,
      };
    });
  
    console.log("userFilters", userFilter);
  
    // //---------------------------------exe5. reformat data with length of comments and post-------------------------------------------
    // const userFormat = userFilter.map((user) => {
    //   return {
    //     id: user.id,
    //     name: user.name,
    //     email: user.email,
    //     comments: user.comments.length,
    //     posts: user.posts.length,
    //   };
    // });
    // console.log("userFormat", userFormat);

  }
  MapDataWithUser(1);
  
  module.exports = { MapDataWithUser };
//   module.exports = [ MapDataWithUser ];
                                                     