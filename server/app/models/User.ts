import * as mongoose from 'mongoose';

let userSchema = mongoose.Schema({
  local: {
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: {type: String, unique: true}
  }
});

userSchema = mongoose.model('User', userSchema);

export {userSchema};
