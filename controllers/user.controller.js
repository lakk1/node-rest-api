const HTTPStatus = require('http-status');

const User = require('../models/user.model');

exports.create = async function(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(HTTPStatus.CREATED).json(user.toJson());
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).send(error);
  }
};

exports.getUsers = async function(req, res) {
  try {
    const users = await User.find({});
    console.log(users);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(HTTPStatus.BAD_REQUEST).send(error);
  }
};
