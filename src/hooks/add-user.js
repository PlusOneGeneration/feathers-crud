// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return function addUser(hook) {
        hook.data.writer = hook.params.user._id;

        return Promise.resolve(hook);
    };
};
