const {authenticate} = require('feathers-authentication').hooks;
const addWriter = require('../../hooks/add-user');
const {populate} = require('feathers-hooks-common');
const writerControl = require('../../hooks/writer-control');
const superuserControl = require('../../hooks/superuser-control');

module.exports = {
    before: {
        all: [authenticate('jwt')],
        find: [],
        get: [],
        create: [addWriter()],
        update: [writerControl()],
        patch: [writerControl()],
        remove: [superuserControl()]
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
        remove: []
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
