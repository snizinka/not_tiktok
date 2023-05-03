const config = require('../../dbConfig');
const util = require('util');
const Picture = require('./Picture');
const query = util.promisify(config.query).bind(config)

class UploadPicture extends Picture {
    static async uploadPicture(data) {
        let queryString = `INSERT INTO nottiktok.photocontent (userId, postId, photoLink) VALUES(${data.userId}, ${data.postId}, "${data.photoLink}")`;
        let newPicture = await query(queryString);
        return newPicture;
    }
}

module.exports = UploadPicture;