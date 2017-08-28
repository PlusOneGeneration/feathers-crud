// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const errors = require('feathers-errors');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return function postRemove(hook) {
        return hook.app.service('comments').Model.remove({post: hook.result._id})
            .exec()
            .then(() => {
                console.log('Comments were deleted');
                return hook;
            })
            .catch((err) => {
                throw new errors.NotFound('Comments wasn`t deleted', err);
            })
    };
};
