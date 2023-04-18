// // //Promis là object contructer => cần từ khóa new để tạo đối tượng
// // //Truyền vào một function excutor với 2 tham số là 2 function
// // //
// // var promise = new Promise ((resolve, reject) => {
// //   //excutor: thực thi
// //   resolve([{
// //     name: "hương"
// //   }]);
// // })

// // promise
// //   .then((res) => {
// //     console.log(res)
// //   })
// //   .catch(() => {
// //     console.log("loi")
// //   })
// //   .finally(() => {
// //     console.log("done")
// //   })

// async function GetUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return await res.json();
// }
 
// async function GetPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return await res.json();
// }

// async function GetComments() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/comments");
//   return await res.json();
// }

//2. Get all Users from API
// GetUsers().then((data) => console.log(data));

// Promise.all([GetUsers(), GetPosts(), GetComments()]).then(data => console.log(data))
(async () => {
  let [users, posts, comments] = await Promise.all([
    GetUsers(),
    GetPosts(),
    GetComments(),
  ]);
  const userFilter = users.map((user) => {
    const postFilter = posts.filter((post) => post.userId === user.id);
    const commentFilter = postFilter.map((post) =>
      comments.filter((comment) => post.id === comment.postId)
    );
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      comments: commentFilter,
      postFilter: postFilter,
    };
  });

  console.log("postByUser", userFilter);

  //4. filter user with more than 3 comments
  const UserWithCommentMoreThan3 = userFilter.filter(
    (i) => i.comments.length > 3
  );
  console.log("UserWith", UserWithCommentMoreThan3);

  //5. Reformat the data with   count of comments and postFilter
  // for(let i =0 ;i< userFilter.length; i++) {
  //   userFilter[i].comments = userFilter[i].comments.length;
  //   userFilter[i].postFilter = userFilter[i].postFilter.length
  // }
  userFilter.forEach((user) => {
    user.comments = user.comments.length;
    user.postFilter = user.postFilter.length;
  });
  console.log("ReFormatDataWithPostAndComment", userFilter);

  //6. Person with the most comments
  var max = 0;
  // const userWithTheMostComments = userFilter.filter(comment => )
  // console("user max", max)

})();

// // fetch("https://jsonplaceholder.typicode.com/users") // Step 2: Get data from all users
// //   .then((response) => response.json())
// //   .then((users) => {
// //     fetch("https://jsonplaceholder.typicode.com/posts") // Step 3: Get all posts and comments
// //       .then((response) => response.json())
// //       .then((posts) => {
// //         fetch("https://jsonplaceholder.typicode.com/comments")
// //           .then((response) => response.json())
// //           .then((comments) => {
// //             // Map the posts and comments data with the users array
// //             const mappedPosts = posts.map((post) => {
// //               const user = users.find((u) => u.id === post.userId);
// //               const postComments = comments.filter((c) => c.postId === post.id);

// //               return {
// //                 ...post,
// //                 user,
// //                 comments: postComments,
// //               };
// //             });

// //             const UserMoreThan3Comment = mappedPosts.postComments.filter((comment) => comment.length>3)
// //             console.log(mappedPosts);
// //             console
// //           });
// //       });
// //   });


async function choAVayTien(soTien) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(soTien);
    }, 1000);
  });
}

const giayNo = choAVayTien(1000).then(res => console.log(res));

console.log("giayno",giayNo)

//  async function getData() {
//   // return setTimeout(() => {
//   //   const data = [
//   //         {id: 1, name: "Developer A"},
//   //         {id: 2, name: "Devloper B"}
//   //       ];
//   // });
//   return new Promise((resolve, reject) => {
//     const data = [
//       {id: 1, name: "Developer A"},
//       {id: 2, name: "Devloper B"}
//     ];

//     setTimeout(() => {
//       resolve(data);
//     }, 1000);
//   });
// }

// /**
//  * Fake like we are submitting the data to an API elsewhere
//  *
//  * @param inputData
//  */
// function submitData (inputData) {
//   console.log('starting to submit');

//   return new Promise((resolve, reject) => {
//     // Act like we submit the inputData to the server and takes 1s
//     const status = randomStatus();

//     setTimeout(() => {
//       resolve({
//         success: status
//       });
//     }, 1000);
//   });
// }

// /**
//  * Just a helper random the result of the submit: success or failed
//  *
//  * @returns {boolean}
//  */
// const randomStatus = () => [true, false][Math.floor(Math.random() * 2)];


// (async () => {
//   const data =   await getData();
//   console.log('data',data)
//   const names = data.map(data => data.name);
//   console.log(names);
//   const {success} = await submitData(names);
//   if (success === true) {
//     console.log("This is a successful form")
//   } else {
//     console.log("This is a failed form")
//   }
// })();

