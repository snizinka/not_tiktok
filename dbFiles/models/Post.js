class Post {
    constructor(postId, _user, _category, description, _video, _picture, _text, likes, shares, _comments, iliked = null, followers = null, following = null) {
        this.postId = postId;
        this._user = _user;
        this._category = _category;
        this.description = description;
        this._video = _video;
        this._picture = _picture;
        this._text = _text;
        this.likes = likes;
        this.shares = shares;
        this._comments = _comments;
        this.iliked = iliked;
        this.followers = followers;
        this.following = following;
    }
}

module.exports = Post;