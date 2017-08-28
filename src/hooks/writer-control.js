// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const errors = require('feathers-errors');

module.exports = function () { // eslint-disable-line no-unused-vars
    return function writerControl(hook) {

        if (hook.params.user._id != hook.data.writer) {
            throw new errors.Forbidden('Forbidden');
        }

        return hook;

    };
};
