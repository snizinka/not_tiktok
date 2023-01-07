class Picture {
    constructor(photoContentId, userId, postId, photoLink, datePublished) {
        this.photoContentId = photoContentId;
        this.userId = userId;
        this.postId = postId;
        this.photoLink = photoLink;
        this.datePublished = datePublished;
    }
}

module.exports = Picture;