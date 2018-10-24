import db from '../db/models';

const directory = db.Directory;

/**
 * @param {param} req
 * @param {param} res
 * @param {func} next
 */
class UpdateDevContactController {
  /**
 * @param {obj} req
 * @param {obj} res
 * @returns {json} create Contact
 */
  static updateContact(req, res) {
    directory.findOne({
      where: {
        id: req.params.contactId,
      }
    }).then((foundContact) => {
      if (!foundContact) {
        return res.status(404).json({
          message: 'The contact of this developer is not found.'
        });
      }
      foundContact.update(req.body, {
        fields: Object.keys(req.body)
      }).then(modifyContact => res.status(200).json({
        message: 'Success! Contact has be updated.',
        modifyContact
      }));
    }).catch(error => res.status(500).json(error.message));
  }
}

export default UpdateDevContactController;
