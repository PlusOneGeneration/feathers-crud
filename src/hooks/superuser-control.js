// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const errors = require('feathers-errors');

module.exports = function () { // eslint-disable-line no-unused-vars
    return function superuserControl(hook) {

        return this.Model.findById(hook.id)
            .populate('post', 'writer')
            .exec()
            .then((comment) => {
                const user = hook.params.user._id.toString();
                if (user !== comment.writer.toString() && user !== comment.post.writer.toString()) {
                    throw new errors.Forbidden('Forbidden');

                }
                return hook;
            })
            .catch((err) => {
                throw new errors.NotFound('Comment not found', err);
            })

    };
};
