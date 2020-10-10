const mongoose = require('mongoose');
const connection = require('./../db');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 8;

const Schema = mongoose.Schema;
const userSchema = new Schema({
    userId: mongoose.Schema.ObjectId,
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    nickname: {
        type: String,
        required: true,
        minLength: 1,
    },
    pairs: {
        type: [mongoose.Schema.ObjectId],
        default: []
    },
    messagesBuffer: {
        type: [{
            chat_id: {
                type: mongoose.Schema.ObjectId
            },
            mes_id: {
                type: mongoose.Schema.ObjectId
            }
        }],
        default: []
    }
}, { timestamps: true });

userSchema.pre('save', function(next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = connection.model('User',userSchema);

module.exports = User;