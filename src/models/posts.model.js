// posts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const {Schema} = mongooseClient;
    const posts = new Schema({
        title: {type: String, required: true},
        text: {type: String, required: true},
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now},
        writer: {type: Schema.Types.ObjectId, ref: 'users'}
    });

    return mongooseClient.model('posts', posts);
};
