const config = require('../../dbConfig');
const util = require('util');
const Video = require('./Video');
const query = util.promisify(config.query).bind(config)

class UploadVideo extends Video {
    static async uploadContent(data) {
        const queryString = `INSERT INTO nottiktok.videocontent (userId, postId, videoLink, videoLength) VALUES(${data.userId}, ${data.postId}, "${data.content.content.link}", 0)`;
        const newVideo = await query(queryString);
        
        return newVideo;
    }
}

module.exports = UploadVideo;