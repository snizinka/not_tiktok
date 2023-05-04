const config = require('../../dbConfig');
const util = require('util');
const Picture = require('./Picture');
const query = util.promisify(config.query).bind(config)

class UploadPicture extends Picture {
    static async uploadContent(data) {
        const queryString = `INSERT INTO nottiktok.photocontent (userId, postId, photoLink) VALUES(${data.userId}, ${data.postId}, "${data.content.content.link}")`;
        const newPicture = await query(queryString);
        
        return newPicture;
    }
}

module.exports = UploadPicture;