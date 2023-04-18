const {MapDataWithUser} = require('./exe3.js')

//filter user with more than 3 comments
// console.log("mapdata", MapDataWithUser)
const FilterUserByComments  = async () => {
    const resData = await MapDataWithUser()
    // const filterUserWithComments = await MapDataWithUser().filter(user => user.comments.length > 3)
    // console.log("filterUserWithComments", filterUserWithComments)
    return resData.then(res => res)
}


FilterUserByComments()