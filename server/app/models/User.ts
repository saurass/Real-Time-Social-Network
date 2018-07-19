import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from 'jsonwebtoken';

// Model for User data
let userSchema = mongoose.Schema({
  local: {
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: {type: String}
  },
  facebook: {
    id: {type: String},
    token: {type: String},
    name: {type: String},
    email: {type: String}
  },
  twitter: {
    id: {type: String},
    token: {type: String},
    displayName: {type: String},
    username: {type: String}
  },
  google: {
    id: {type: String},
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

userSchema.methods.generateJwt = function () {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.email,
    username: this.username,
    exp: parseInt(expiry.getTime() / 1000)
  }, process.env.SECRET_TOKEN);
};

userSchema = mongoose.model('User', userSchema);

// exporting the model
export {userSchema};
