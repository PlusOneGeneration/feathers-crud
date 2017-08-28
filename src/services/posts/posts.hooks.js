const {authenticate} = require('feathers-authentication').hooks;
const addWriter = require('../../hooks/add-user');
const writerControl = require('../../hooks/writer-control');
const {populate} = require('feathers-hooks-common');
const removeControl = require('../../hooks/remove-control');

const postRemove = require('../../hooks/post-remove');

module.exports = {
    before: {
        all: [authenticate('jwt')],
        find: [],
        get: [],
        create: [addWriter()],
        update: [writerControl()],
        patch: [writerControl()],
        remove: [removeControl()]
    },

    after: {
        all: [populate({
            schema: {
                include: [{
                    service: 'users',
                    nameAs: 'user',
                    parentField: 'writer',
                    childField: '_id'
                }]
            }
        })],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [postRemove()]
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};
