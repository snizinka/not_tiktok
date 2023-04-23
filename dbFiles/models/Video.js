const config = require('../dbConfig');
const util = require('util');
const query = util.promisify(config.query).bind(config)

class Video {
    constructor(videoId, userId, postId, videoLink, videoLength, datePublished) {
        this.videoId = videoId;
        this.userId = userId;
        this.postId = postId;
        this.videoLink = videoLink;
        this.videoLength = videoLength;
        this.datePublished = datePublished;
    }

    static async getVideos(postId) {
        const videos = JSON.parse(JSON.stringify(await query(`SELECT * FROM nottiktok.videocontent as vc WHERE vc.postId = ${postId}`)));
        let videoArray = [];

        for (let video of videos)
            videoArray.push(new Video(video.videoId, video.userId, video.postId, video.videoLink, video.videoLength, video.datePublished));

        return videoArray;
    }
}

module.exports = Video;