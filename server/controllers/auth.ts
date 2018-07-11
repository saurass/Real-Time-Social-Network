import * as mongoose from 'mongoose';

export default class AuthCtrl {
  registerUser = (req, res) => {
    const User = mongoose.model('User');
    const user = User();
    user.local.email = req.body.email;
    user.local.username = req.body.username;
    user.local.password = user.generateHash(req.body.password);

    user.save(function (err) {
      const token;
      token = user.generateJwt();
      res.status(200).json({'token': token});
    });
  };

  loginUser = (req, res) => {
    res.status(200).json({
      message: 'Yeh Login Controller Worked!!'
    });
  }
}
