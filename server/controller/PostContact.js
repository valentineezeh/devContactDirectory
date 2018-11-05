import db from '../db/models';

const directory = db.Directory;

/**
 * @param {param} req
 * @param {param} res
 * @param {func} next
 */
class PostDevContactController {
  /**
 * @param {obj} req
 * @param {obj} res
 * @returns {json} create Contact
 */
  static postContact(req, res) {
    const email = req.body.email.trim().toLowerCase();
    const category = req.body.category.trim().toLowerCase();
    if (category !== 'frontend' && category !== 'backend' && category !== 'others') {
      res.status(400).json({
        message: 'Category most either be frontend, backend or others'
      });
    } else {
      directory.findOne({
        where: {
          email,
          mobile: req.body.mobile
        }
      }).then((existingUser) => {
        if (existingUser) {
          res.status(409).json({
            message: 'User with this credentials already exist.'
          });
        } else {
          directory.create({
            userId: req.decoded.userId,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mobile: req.body.mobile,
            email,
            location: {
              address: req.body.address,
              country: req.body.country,
              state: req.body.state,
              city: req.body.city
            },
            category,
            programmingLanguage: req.body.programmingLanguage,
            linkedinUrl: req.body.linkedinUrl,
            gitHubRepoLink: req.body.gitHubRepoLink
          }).then(newDirectory => res.status(200).json({
            message: 'Success! Contact has been created.',
            newDirectory
          })).catch((error) => {
            res.status(500).json(error);
          });
        }
      });
    }
  }
}

export default PostDevContactController;

