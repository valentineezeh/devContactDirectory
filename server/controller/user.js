import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db/models/';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET_KEY;
const { User } = db;

/**
 * @param {param} req
 * @param {param} res
 */
class AuthController {
/**
 * @param {obj} req
 * @param {obj} res
 * @returns {json} SIgn Up User
 */
  static signUp(req, res) {
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({
        Message: 'Password Mismatch!',
      });
    }
    User.find({
      where: {
        email: req.body.email.trim().toLowerCase(),
      }
    }).then((existingUser) => {
      if (existingUser) {
        return res.status(409).send({
          status: 'Error',
          message: 'User already exist '
        });
      }
    }).catch((error) => {
      console.log(error.message);
      res.status(400).json(error.message);
    });
    const hash = bcrypt.hashSync(req.body.password, 10);
    User
      .create({
        email: req.body.email,
        username: req.body.username,
        password: hash,
      })
      .then((user) => {
        const token = jwt.sign({
          userId: user.id,
        }, secret, { expiresIn: 1440 });
        return res.status(200).json({
          message: `Welcome ${user.username} to Developer Contact Directory`,
          username: user.username,
          password: user.password,
          email: user.email,
          token
        });
      }
      )
      .catch((error) => {
        res.status(400).json(error.message);
      });
  }

  /**
 * @param {obj} req
 * @param {obj} res
 * @returns {json} Login User
 */
  static signIn(req, res) {
    if (!req.body.email || req.body.email.trim().length === 0) {
      return res.status(400).json({
        message: 'Email Field should not be empty'
      });
    } if (!req.body.password || req.body.password.trim().length === 0) {
      return res.status(400).json({
        message: 'Password Field Should not be empty'
      });
    }
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'Invalid Email or Password'
        });
      }
      bcrypt.compare(req.body.password, user.password, (err, response) => {
        if (err) {
          return res.status(500).send({
            error: err.message
          });
        }
        const token = jwt.sign({
          username: user.username,
          userId: user.id,
        }, secret, { expiresIn: 1440 });
        return res.status(200).send({
          message: `Welcome ${user.username} to Developer Contact Directory`,
          token,
        });
      });
    }).catch((error) => {
      console.log(error.message);
      return res.status(500).send({
        error: `An error occoured: ${error.message}`
      });
    });
  }
}


export default AuthController;
