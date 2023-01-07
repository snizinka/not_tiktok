class Text {
    constructor(textContentId, userId, postId, textContent, datePublished) {
        this.textContentId = textContentId;
        this.userId = userId;
        this.postId = postId;
        this.textContent = textContent;
        this.datePublished = datePublished;
    }
}

module.exports = Text;