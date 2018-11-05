import db from '../db/models';

const directory = db.Directory;

/**
 * @param {param} req
 * @param {param} res
 */
class DeleteADevContactContoller {
  /**
 * @param {obj} req
 * @param {obj} res
 * @returns {json} all contacts directory
 */
  static deleteDevContact(req, res) {
    directory.find({
      where: {
        id: req.params.contactId,
      }
    }).then((devContact) => {
      console.log('===>', devContact)
      if (req.decoded.userId !== devContact.userId) {
        return res.status(400).send({
          error: 'You do not have the privilege to Delete this Directory',
        });
      }
      if (!devContact) {
        return res.status(404).json({
          message: 'The contact of this developer is not found.'
        });
      }
      devContact
        .destroy()
        .then(() => {
          res.status(200).json({
            message: `Success! Contact with Id Number ${devContact.id} has been deleted.`
          });
        }).catch(error => res.status(500).json(error.message));
    });
  }
}
export default DeleteADevContactContoller;
