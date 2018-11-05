import validator from 'validator';

/**
 * @param {param} req
 * @param {param} res
 */
class AuthValidation {
  /**
 * @param {obj} req
 * @param {obj} res
 * @param {obj} next
 * @returns {json} SIgn Up User
 */
  static signUp(req, res, next) {
    const errors = [];
    if (req.body.email == undefined) {
      errors.push('Email is required');
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    if (!validator.isEmail(req.body.email.toString())) {
      errors.push('Valid Email is required');
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    if (req.body.password == undefined) {
      errors.push('Valid Password required...');
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    if (req.body.password.length <= 6) {
      errors.push('Password must exceed 6 characters..');
      return res.status(400).send({
        status: 'Errors',
        message: errors
      });
    }
    if (req.body.password != req.body.confirmPassword) {
      errors.push('Mismatch Password');
      return res.status(400).send({
        status: 'Error',
        msg: errors
      });
    }
    if (errors.length > 0) {
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    return next();
  }
  /**
 * @param {obj} req
 * @param {obj} res
 * @param {obj} next
 * @returns {json} Sign in User
 */
  static signIn(req, res, next) {
    const errors = [];
    if (req.body.email == '') {
      errors.push('Email should not be empty');
      return res.status(400).send({
        status: 'Error',
        msg: errors
      });
    }
    if (!validator.isEmail(req.body.email.toString())) {
      errors.push('Email must be valid..');
      return res.status(400).send({
        status: 'Error',
        msg: errors
      });
    }
    if (req.body.email == undefined) {
      errors.push('Email is required..');
      return res.status(400).send({
        status: 'Error',
        msg: errors
      });
    }
    if (req.body.password == undefined) {
      errors.push('Password is required...');
      return res.status(400).send({
        status: 'Error',
        msg: errors
      });
    }
    if (req.body.password == '') {
      errors.push('Password should not be empty.');
      return res.status(400).send({
        status: 'Error',
        msg: errors
      });
    }
    return next();
  }
}
export default AuthValidation;
