// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const errors = require('feathers-errors');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function removeControl (hook) {
      return this.Model.findById(hook.id)
          .exec()
          .then((post) => {
              const user = hook.params.user._id.toString();

              if (user !== post.writer.toString()) {
                  throw new errors.Forbidden('Forbidden');

              }
              return hook;
          })
          .catch((err) => {
              throw new errors.NotFound('Post not found', err);
          })
  };
};
