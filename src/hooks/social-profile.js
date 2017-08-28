// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
    return function socialProfile(hook) {

        // console.log('hook.data.facebook', hook.data.facebook);
        if (hook.data.google ) {
            hook.data.email = hook.data.google.profile.emails[0].value
        }
        if(hook.data.facebook){
            hook.data.email = hook.data.facebook.profile.emails[0].value
        }
        // Hooks can either return nothing or a promise
        // that resolves with the `hook` object for asynchronous operations
        return Promise.resolve(hook);
    };
};
