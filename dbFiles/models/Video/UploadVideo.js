const config = require('../../dbConfig');
const util = require('util');
const Video = require('./Video');
const query = util.promisify(config.query).bind(config)

class UploadVideo extends Video {
    static async uploadPicture(data) {
        let queryString = `INSERT INTO nottiktok.photocontent (userId, postId, videoLink, videoLength) VALUES(${data.userId}, ${data.postId}, "${data.videoLink}", ${data.videoLength})`;
        let newVideo = await query(queryString);
        return newVideo;
    }
}

module.exports = UploadVideo;