const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
        type: String,
        required: 'Thought is required.',
        minlength: 1,
        maxlength: 280
        },
        createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => formatDate(createdAtVal)
        },
        username: {
        type: String,
        required: 'Username is required.'
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
        virtuals: true,
        getters: true
        },
        id: false
    }
);