// (async function () {
//     const resUsers = await fetch('https://jsonplaceholder.typicode.com/users?_limit=1');
//     const users = await resUsers.json();
//     console.log('Users', users);
//     users.forEach(async (user) => {
//         const resPosts = await fetch(
//             `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
//         );
//         const posts = await resPosts.json();
//         console.log('Posts', posts);
//         posts.forEach(async (post) => {
//             const resComments = await fetch(
//                 `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`,
//             );
//             const comments = await resComments.json();
//             console.log('Comments', comments);
//         });
//     });
// })();

