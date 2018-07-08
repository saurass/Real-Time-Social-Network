import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';

// Model for User data
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

// Encrypt the password using bcrypt
userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// This function will be able to compare the passwords
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

userSchema = mongoose.model('User', userSchema);

// exporting the model
export {userSchema};
