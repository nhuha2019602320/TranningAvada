const getApi = require("./getApi");

async function mapDataWithUser(id) {
  let [users, posts, comments] = await Promise.all([
    getApi("https://jsonplaceholder.typicode.com/users"),
    getApi("https://jsonplaceholder.typicode.com/posts"),
    getApi("https://jsonplaceholder.typicode.com/comments"),
  ]);

  //--------------------------------exe4. Filter only users with more than 3 comments.-------------------------------------------
  const userFilter = users.map((user) => {
    const postFilter = posts.filter((post) => post.userId === user.id);
    const commentFilter = postFilter.map((post) =>
      comments.filter((comment) => post.id === comment.postId)
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

  //---------------------------------exe5. reformat data with length of comments and post-------------------------------------------
  const usersFormat = userFilter.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      comments: user.comments.length,
      posts: user.posts.length,
    };
  });
  console.log("userFormat", usersFormat);

  //---------------------------exe6. User with the most comments/posts-------------------------------
  // var maxArr = 0;
  // for(let i=0;i< userFilter.length;i++) {
  //     if(userFilter[i].comments.length > maxArr)
  //         maxArr = userFilter[i];
  // }
  // console.log("max",maxArr)

  const maxOfComments = usersFormat.reduce((accumulator, current) =>
    accumulator.comments > current.comments ? accumulator : current
  );

  const maxOfPosts = usersFormat.reduce((accumulator, current) =>
    accumulator.posts > current.posts ? accumulator : current
  );

  console.log("maxOfComment", maxOfComments);
  console.log("maxOfPosts", maxOfPosts);

  //--------------------------exe7. Sort the list of users by the postsCount value descending?-----------------------
  const sortUserByPostCount = usersFormat.sort(
    (pre, next) => next.posts - pre.posts
  );
  console.log("sort", sortUserByPostCount);
  //-------------------exe8.Get the post with ID of 1 via API request, at the same time get comments for post ID of 1 via another API reques----------------------------------------
}
mapDataWithUser();

async () => {
  const mapDataWithUser = await mapDataWithUser();
  console.log("data map", mapDataWithUser);
};

// module.exports = { mapDataWithUser };

async function getPostWithComments(id) {
  let [post, comments] = await Promise.all([
    getApi(`https://jsonplaceholder.typicode.com/posts/${id}`),
    getApi(`https://jsonplaceholder.typicode.com/comments?postId=${id}`),
  ]);

  return { ...post, comments };
}

(async () => {
  const postData = await getPostWithComments(1);
  console.log(postData);
})();
