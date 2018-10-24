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
 * @returns {json} createArticles
 */
  static postContact(req, res, next) {
    const email = req.body.email.trim().toLowerCase();
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
          category: req.body.category.trim().toLowerCase(),
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

export default PostDevContactController;

/**
 * directory.create({
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
      category: req.body.category,
      programmingLanguage: req.body.programmingLanguage,
      linkedinUrl: req.body.linkedinUrl,
      gitHubRepoLink: req.body.gitHubRepoLink
    }).then(newDirectory => res.status(200).json({
      message: 'Success! Contact has been created.',
      newDirectory
    })).catch(error => res.status(500).json(error));
 */
