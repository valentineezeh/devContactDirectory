import db from '../db/models';

const directory = db.Directory;

/**
 * @param {param} req
 * @param {param} res
 */
class GetAllDevContactsController {
  /**
 * @param {obj} req
 * @param {obj} res
 * @returns {json} all contacts directory
 */
  static getAllContact(req, res) {
    if (req.query.category == null) {
      directory
        .all()
        .then((allContact) => {
          res.status(200).json(allContact);
        });
    } else {
      directory.findAll({
        where: {
          category: req.query.category
        }
      }).then((directories) => {
        const { category } = req.query;
        const newContactList = [];
        directories.filter((contact) => {
          if (contact.category === category) {
            newContactList.push(contact);
          }
        });
        return res.status(200).json(newContactList);
      }).catch(() => res.status(404).json({
        message: 'Category not found.',
      }));
    }
  }
}

export default GetAllDevContactsController;
