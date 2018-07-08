import * as mongoose from 'mongoose';

let userSchema = mongoose.Schema({
  local: {
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: {type: String, unique: true}
  },
  facebook: {
    id: {type: String, unique: true},
    token: {type: String},
    name: {type: String},
    email: {type: String}
  },
  twitter: {
    id: {type: String, unique: true},
    token: {type: String},
    displayName: {type: String},
    username: {type: String}
  },
  google: {
    id: {type: String, unique: true},
    token: {type: String},
    name: {type: String},
    email: {type: String}
  },
});

userSchema = mongoose.model('User', userSchema);

export {userSchema};
