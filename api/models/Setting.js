
'use strict';

module.exports = {
    attributes: {
        key: {
            type: 'string',
            required: true,
            unique:true,
            maxLength: 32
        }, 
        value: {
            type: 'json',
            defaultsTo: []
        }
    }
};