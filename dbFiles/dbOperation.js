const config = require('./dbConfig');
const util = require('util');
const GetPostsByUserId = require('./models/Post/GetPostsByUserId');
const GetPostsFactory = require('./models/Post/Factories/GetPostsFactory');
const PostType = require('./models/Post/PostType');
const CategoryByUser = require('./models/Category/CategoryByUser');
const UserAuthor = require('./models/User/UserAuthor');

const query = util.promisify(config.query).bind(config)

const getProfile = async (id) => {
    let categories = []
    let posts = []
    let userProfile = {}

    try {
        userProfile = new UserAuthor(id)
        await userProfile.fetchUserData();
        categories = CategoryByUser.getCategory(id)
        userProfile.followers = await userProfile.getAmmountOfFollowes()
        userProfile.following = await userProfile.getAmmountOfFollowing()
        posts = await GetPostsByUserId.getPosts(userProfile.userId)

        await Promise.all(posts.map(post => post.getData(2)))
    } catch (err) {
        console.log(err)
    }

    return { data: { categories, posts, userProfile } }
}

const getPosts = async (parameter = PostType.DEFAULT, id = 0, userId) => {
    const post = new GetPostsFactory(parameter);
    let _posts = [];

    try {
        let posts = []
        posts = await post.getPosts(id);

        for (let postForm of posts) {
            const data = await postForm.getData(userId);
            _posts.push(data);
        }

        return { converted: { _posts } };
    } catch (error) {
        console.log(error);
    }
}

const signUser = async (login, password) => {
    try {
        let data = JSON.parse(JSON.stringify(await query(`SELECT * FROM nottiktok.users WHERE username = '${login}'`)));

        return { data }
    } catch (err) {
        console.log(err)
    }
}

const changeLikeState = async (postId, userId) => {
    try {
        let result = JSON.parse(JSON.stringify(await query(`SELECT ls.likesId, ls.postId FROM nottiktok.likes as ls WHERE ls.postId = ${postId} AND ls.userId = ${userId}`)));
        let changeResult;

        if (result.length === 0) {
            await query(`INSERT INTO nottiktok.likes(userId, postId) VALUES(${userId}, ${postId})`)
            changeResult = JSON.parse(JSON.stringify(await query(`SELECT ls.likesId, ls.postId FROM nottiktok.likes as ls WHERE ls.userId = ${userId} AND ls.postId = '${postId}'`)))
        } else {
            await query(`DELETE FROM nottiktok.likes WHERE postId = ${postId} AND userId = ${userId}`);
            changeResult = {}
        }

        return { data: changeResult.length > 0 ? true : false }
    } catch (err) {
        console.log(err)
    }
}

const changeFollowState = async (authorId, userId) => {
    try {
        if (authorId === userId) {
            return false
        }
        const checkFollowing = await query(`SELECT * FROM nottiktok.follows as fs WHERE fs.followerId = ${userId} AND fs.userId = ${authorId}`)
        let isFollowing = {}

        if (checkFollowing.length === 0) {
            await query(`INSERT INTO nottiktok.follows(followerId, userId) VALUES(${userId}, ${authorId})`)
            isFollowing = true
        } else {
            await query(`DELETE FROM nottiktok.follows WHERE followerId = ${userId} AND userId = ${authorId}`)
            isFollowing = false
        }

        return { data: isFollowing }
    } catch (err) {
        console.log(err)
    }
}

const usersToAccomplish = async (categories) => {
    try {
        let data = [];

        if (categories.userToFind !== '') {
            let temp = (await query(`SELECT u.username, u.userId, u.userLink FROM nottiktok.users as u
            WHERE u.username LIKE '%${categories.userToFind}%'`));
            data.push(temp);
        } else {
            for (let i = 0; i < categories.categories.length; i++) {

                let temp = (await query(`SELECT u.username, u.userId, u.userLink, ctgr.categoryName FROM nottiktok.users as u
                LEFT JOIN nottiktok.post as pst ON pst.userId = u.userId
                LEFT JOIN nottiktok.category_link as cl ON cl.postId = pst.postId
                LEFT JOIN nottiktok.category as ctgr ON ctgr.categoryId = cl.categoryId
                WHERE ctgr.categoryName = '${categories.categories[i]}'`));
                data.push(temp);
            }
        }

        return { data }
    } catch (err) {
        console.log(err)
    }
}

const createRequest = async (request) => {
    try {
        console.log(request)
        let resultMain = await query(`INSERT INTO nottiktok.requests (task, budget, deadline, moredetails, userId, requestDate) VALUES("${request.task}", ${request.budget}, "${request.deadline}", "${request.detailsFile}", ${request.user}, "2023.03.12")`);
        console.log(resultMain)
        for (let i = 0; i < request.userToAccomplish.length; i++) {
            let resultSub = await query(`INSERT INTO nottiktok.userstoaccomplish (requestId, userId, isPrimary) VALUES(${resultMain.insertId}, ${request.userToAccomplish[i].userId}, 1)`);
        }
        for (let i = 0; i < request.topic.length; i++) {
            let findTopic = JSON.parse(JSON.stringify(await query(`SELECT * FROM nottiktok.category WHERE categoryName = "${request.topic[i]}"`)));
            if (findTopic.length !== 0) {
                let requestcategory = await query(`INSERT INTO nottiktok.requestcategory (requestId, categoryId) VALUES(${resultMain.insertId}, ${findTopic[0].categoryId})`);
            } else {
                let topic = await query(`INSERT INTO nottiktok.category (categoryName) VALUES("${request.topic[i]}")`);
                let requestcategory = await query(`INSERT INTO nottiktok.requestcategory (requestId, categoryId) VALUES(${resultMain.insertId}, ${topic.insertId})`);
            }
        }

        return {
            data: {
                status: true
            }
        };
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getPosts,
    signUser,
    changeLikeState,
    changeFollowState,
    getProfile,
    createRequest,
    usersToAccomplish
};