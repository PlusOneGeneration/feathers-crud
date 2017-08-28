// comments-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const {Schema} = mongooseClient;
    const comments = new Schema({
        text: {type: String, required: true},
        post: {type: Schema.Types.ObjectId, ref: 'posts'},
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now},
        writer: {type: Schema.Types.ObjectId, ref: 'users'}
    });

    return mongooseClient.model('comments', comments);
};
