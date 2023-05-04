const config = require('../../dbConfig');
const util = require('util');
const query = util.promisify(config.query).bind(config)

class CreateTag {
    static async createTag (categoryName, postId) {
        const newCategory = await query(`INSERT nottiktok.category (categoryName) VALUES("${categoryName}")`)
        const newLinkedCategory = await query(`INSERT nottiktok.category_link (categoryId, postId) VALUES(${newCategory.insertId}, ${postId})`)
        
        return newLinkedCategory
    }
}

module.exports = CreateTag