const database = require("../util/database");
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;

module.exports = class Post{
    constructor(data) {
        this.postID = data.postID;
    }

};
