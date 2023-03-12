const config = require('./dbConfig');
const util = require('util');
const Category = require('./models/Category');
const User = require('./models/User');
const Video = require('./models/Video');
const Picture = require('./models/Picture');
const Text = require('./models/Text');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

const query = util.promisify(config.query).bind(config)

const getProfile = async (id) => {
    let amountOfFollowers = {}
    let amountOfFollowing = {}
    let categories = {}
    let posts = {}
    let user = {}
    let photos = [];

    let y = []

    try {
        user = await query(`SELECT * FROM nottiktok.users as us WHERE us.userId = ${id}`)
        categories = await query(`SELECT distinct cy.categoryId, cy.categoryName FROM nottiktok.category_link as ck LEFT JOIN nottiktok.category as cy ON cy.categoryId = ck.categoryId LEFT JOIN nottiktok.post as pt ON pt.postId = ck.postId WHERE pt.userId = ${id}`)
        amountOfFollowers = await query(`SELECT COUNT(*) as followers FROM nottiktok.follows as fs WHERE fs.userId = ${id}`)
        amountOfFollowing = await query(`SELECT COUNT(*) as following FROM nottiktok.follows as fs WHERE fs.followerId = ${id}`)
        posts = await query(`SELECT pt.postId, pt.description, us.userId, us.userLink, us.username, us.userImage FROM nottiktok.post as pt LEFT JOIN nottiktok.users as us ON us.userId = pt.userId WHERE pt.userId = ${id}`);

        for (let i = 0; i < posts.length; i++) {
            let tempPhoto = JSON.parse(JSON.stringify(await query(`SELECT * FROM nottiktok.photocontent as pht WHERE pht.postId = ${posts[i].postId}`)));

            if (tempPhoto[0] !== undefined) {
                photos.push(tempPhoto);
            }
        }

        for (let i = 0; i < posts.length; i++) {
            let pics = []
            for (let p = 0; p < photos.length; p++) {
                for (let w = 0; w < photos[p].length; w++) {
                    if (photos.at(p)[w].postId === posts[i].postId) {
                        pics.push(photos[p])
                    }
                }
            }
            let ps = posts[i]
            y.push({ ps, pics })
        }

    } catch (err) {
        console.log(err)
    }

    let followers = amountOfFollowers.length > 0 ? amountOfFollowers[0] : 0
    let following = amountOfFollowing.length > 0 ? amountOfFollowing[0] : 0
    let userProfile = user.length > 0 ? user[0] : 0

    return { data: { followers, following, categories, posts, userProfile, y } }
}

const getPosts = async (parameter = 'DEFAULT', id = 0) => {
    let likes = [];
    let mylikes = [];
    let comments = [];
    let shares = [];
    let photos = [];
    let videos = [];
    let textes = [];
    let categories = [];
    let _posts = [];

    try {
        let posts = {}
        if (parameter === 'DEFAULT') {
            posts = await query(`SELECT pt.postId, pt.description, us.userId, us.userLink, us.username, us.userImage FROM nottiktok.post as pt LEFT JOIN nottiktok.users as us ON us.userId = pt.userId`);
        } else if (parameter === 'BY_USER_ID') {
            // amountOfFollowers = await query(`SELECT COUNT(*) as followers FROM nottiktok.follows as fs WHERE fs.userId = ${id}`)
            // amountOfFollowing = await query(`SELECT COUNT(*) as following FROM nottiktok.follows as fs WHERE fs.followerId = ${id}`)
            posts = await query(`SELECT pt.postId, pt.description, us.userId, us.userLink, us.username, us.userImage FROM nottiktok.post as pt LEFT JOIN nottiktok.users as us ON us.userId = pt.userId WHERE pt.userId = ${id}`);
        } else if (parameter === 'BY_POST_ID') {
            posts = await query(`SELECT pt.postId, pt.description, us.userId, us.userLink, us.username, us.userImage FROM nottiktok.post as pt LEFT JOIN nottiktok.users as us ON us.userId = pt.userId WHERE pt.postId = ${id}`);
        }

        for (let i = 0; i < posts.length; i++) {
            let tempPhoto = JSON.parse(JSON.stringify(await query(`SELECT * FROM nottiktok.photocontent as pht WHERE pht.postId = ${posts[i].postId}`)));
            let tempVideo = JSON.parse(JSON.stringify(await query(`SELECT * FROM nottiktok.videocontent as vc WHERE vc.postId = ${posts[i].postId}`)));
            let tempText = JSON.parse(JSON.stringify(await query(`SELECT * FROM nottiktok.textcontent as txt WHERE txt.postId = ${posts[i].postId}`)));

            let tempCategory = JSON.parse(JSON.stringify(await query(`SELECT * FROM nottiktok.category_link as cl LEFT JOIN nottiktok.category as cy ON cy.categoryId = cl.categoryId WHERE cl.postId = ${posts[i].postId}`)));

            let tempLikes = JSON.parse(JSON.stringify(await query(`SELECT count(*) as likes, ls.postId FROM nottiktok.likes as ls WHERE ls.postId = ${posts[i].postId}`)));

            let tempShares = JSON.parse(JSON.stringify(await query(`SELECT count(*) as shares, ss.postId FROM nottiktok.shares as ss WHERE ss.postId = ${posts[i].postId}`)));

            let tempComments = JSON.parse(JSON.stringify(await query(`SELECT * from nottiktok.comments as cs LEFT JOIN nottiktok.users as us ON us.userId = cs.userId WHERE cs.postId = ${posts[i].postId}`)));

            let tempILiked = JSON.parse(JSON.stringify(await query(`SELECT ls.likesId, ls.postId FROM nottiktok.likes as ls WHERE ls.postId = ${posts[i].postId} AND ls.userId = ${2}`)));

            if (tempPhoto[0] !== undefined) {
                photos.push(tempPhoto);
            }
            if (tempVideo[0] !== undefined) {
                videos.push(tempVideo);
            }
            if (tempText[0] !== undefined) {
                textes.push(tempText);
            }
            if (tempCategory[0] !== undefined) {
                categories.push(tempCategory);
            }
            if (tempLikes[0] !== undefined) {
                likes.push(tempLikes);
            }
            if (tempShares[0] !== undefined) {
                shares.push(tempShares);
            }
            if (tempComments[0] !== undefined) {
                comments.push(tempComments);
            }
            if (tempILiked[0] !== undefined) {
                mylikes.push(tempILiked);
            }
        }

        for (let i = 0; i < posts.length; i++) {
            let _User = new User(posts[i].userId, posts[i].username, posts[i].userLink, posts[i].userImage)
            let _Category = []
            let _Photos = []
            let _Video = []
            let _Text = []
            let _Comments = []
            let like = 0;
            let share = 0;
            let iLiked = 0;

            for (let q = 0; q < shares.length; q++) {
                for (let j = 0; j < shares[q].length; j++) {
                    if (shares.at(q)[j].postId === posts[i].postId) {
                        share = shares.at(q)[j]
                    }
                }
            }

            for (let q = 0; q < likes.length; q++) {
                for (let j = 0; j < likes[q].length; j++) {
                    if (likes.at(q)[j].postId === posts[i].postId) {
                        like = likes.at(q)[j]
                    }
                }
            }

            for (let q = 0; q < mylikes.length; q++) {
                for (let j = 0; j < mylikes[q].length; j++) {
                    if (mylikes.at(q)[j].postId === posts[i].postId) {
                        iLiked = mylikes.at(q)[j]
                    }
                }
            }

            for (let q = 0; q < comments.length; q++) {
                for (let j = 0; j < comments[q].length; j++) {
                    if (comments.at(q)[j].postId === posts[i].postId) {
                        _Comments.push(new Comment(comments.at(q)[j].commentId, comments.at(q)[j].userId, comments.at(q)[j].postId, comments.at(q)[j].commentContent, comments.at(q)[j].publishDate, new User(comments.at(q)[j].userId, comments.at(q)[j].username, comments.at(q)[j].userLink, comments.at(q)[j].userImage)))
                    }
                }
            }

            for (let q = 0; q < categories.length; q++) {
                for (let j = 0; j < categories[q].length; j++) {
                    if (categories.at(q)[j].postId === posts[i].postId) {
                        _Category.push(new Category(categories.at(q)[j].categoryLinkId, categories.at(q)[j].categoryId, categories.at(q)[j].categoryName))
                    }
                }
            }

            for (let q = 0; q < photos.length; q++) {
                for (let j = 0; j < photos[q].length; j++) {
                    if (photos.at(q)[j].postId === posts[i].postId) {
                        _Photos.push(new Picture(photos.at(q)[j].photoContentId, photos.at(q)[j].userId, photos.at(q)[j].postId, photos.at(q)[j].photoLink, photos.at(q)[j].datePublished))
                    }
                }
            }

            for (let q = 0; q < videos.length; q++) {
                for (let j = 0; j < videos[q].length; j++) {
                    if (videos.at(q)[j].postId === posts[i].postId) {
                        _Video.push(new Video(videos.at(q)[j].videoId, videos.at(q)[j].userId, videos.at(q)[j].postId, videos.at(q)[j].videoLink, videos.at(q)[j].videoLength, videos.at(q)[j].datePublished))
                    }
                }
            }

            for (let q = 0; q < textes.length; q++) {
                for (let j = 0; j < textes[q].length; j++) {
                    if (textes.at(q)[j].postId === posts[i].postId) {
                        _Text.push(new Text(textes.at(q)[j].textContentId, textes.at(q)[j].userId, textes.at(q)[j].postId, textes.at(q)[j].textContent, textes.at(q)[j].datePublished))
                    }
                }
            }

            _posts.push(new Post(posts[i].postId,
                _User,
                _Category,
                posts[i].description,
                _Video,
                _Photos,
                _Text,
                like,
                share,
                _Comments,
                iLiked
            ))
        }

        return { posts, media: { videos, photos, textes }, converted: { _posts } };
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

const changeLikeState = async (likeId, postId, userId) => {
    try {
        let result = JSON.parse(JSON.stringify(await query(`SELECT ls.likesId, ls.postId FROM nottiktok.likes as ls WHERE ls.likesId = '${likeId}'`)));
        let data;

        if (result.length === 0) {
            await query(`INSERT INTO nottiktok.likes(userId, postId) VALUES(${userId}, ${postId})`)
            data = JSON.parse(JSON.stringify(await query(`SELECT ls.likesId, ls.postId FROM nottiktok.likes as ls WHERE ls.userId = ${userId} AND ls.postId = '${postId}'`)))
        } else {
            await query(`DELETE FROM nottiktok.likes WHERE likesId = '${likeId}'`);
            data = {}
        }
        return { data }
    } catch (err) {
        console.log(err)
    }
}

const usersToAccomplish = async (categories) => {
    try {
        let data = [];

        if(categories.userToFind !== '') {
            let temp = (await query(`SELECT u.username, u.userId, u.userLink FROM nottiktok.users as u
            WHERE u.username LIKE '%${categories.userToFind}%'`));
            data.push(temp);
        } else {
            for(let i = 0; i < categories.categories.length; i++) {
            
                let temp = (await query(`SELECT u.username, u.userId, u.userLink, ctgr.categoryName FROM nottiktok.users as u
                LEFT JOIN nottiktok.post as pst ON pst.userId = u.userId
                LEFT JOIN nottiktok.category_link as cl ON cl.postId = pst.postId
                LEFT JOIN nottiktok.category as ctgr ON ctgr.categoryId = cl.categoryId
                WHERE ctgr.categoryName = '${categories.categories[i]}'`));
                data.push(temp);
            }
        }

        return { data }
    } catch(err) {
        console.log(err)
    }
}

const createRequest = async (request) => {
    try {
        console.log(request)
        let resultMain = await query(`INSERT INTO nottiktok.requests (task, budget, deadline, moredetails, userId, requestDate) VALUES("${request.task}", ${request.budget}, "${request.deadline}", "${request.detailsFile}", ${request.user}, "2023.03.12")`);
        console.log(resultMain)
        for(let i = 0; i < request.userToAccomplish.length; i++) {
            let resultSub = await query(`INSERT INTO nottiktok.userstoaccomplish (requestId, userId, isPrimary) VALUES(${resultMain.insertId}, ${request.userToAccomplish[i].userId}, 1)`);
        }
        for(let i = 0; i < request.topic.length; i++) {
            let findTopic = JSON.parse(JSON.stringify(await query(`SELECT * FROM nottiktok.category WHERE categoryName = "${request.topic[i]}"`)));
            if(findTopic.length !== 0) {
                let requestcategory = await query(`INSERT INTO nottiktok.requestcategory (requestId, categoryId) VALUES(${resultMain.insertId}, ${findTopic[0].categoryId})`);
            } else {
                let topic = await query(`INSERT INTO nottiktok.category (categoryName) VALUES("${request.topic[i]}")`);
                let requestcategory = await query(`INSERT INTO nottiktok.requestcategory (requestId, categoryId) VALUES(${resultMain.insertId}, ${topic.insertId})`);
            }
        }
        
        return {data: {
            status: true
        }};
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getPosts,
    signUser,
    changeLikeState,
    getProfile,
    createRequest,
    usersToAccomplish
};