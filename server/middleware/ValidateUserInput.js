import Validator from 'validatorjs';
/**
 * @class UserInputValidation
 */
class UserInputValidation {
  /**
   * validate user input on signUp
   *
   * @param {object} req
   * @param {object} res
   * @param {func} next
   *
   * @return {void}
   */
  static InputValidation(req, res, next) {
    const {
      email,
      firstname,
      lastname,
      mobile,
      address,
      country,
      state,
      city,
      category,
      programmingLanguage,
      linkedinUrl,
      gitHubRepoLink
       // eslint-disable-line
    } = req.body;
    const validation = new Validator(
      {
        email,
        firstname,
        lastname,
        mobile,
        address,
        country,
        state,
        city,
        category,
        programmingLanguage,
        linkedinUrl,
        gitHubRepoLink
      },
      {
        firstname: ['required', 'string', 'min:2', 'max:40'],
        lastname: ['required', 'string', 'min:2', 'max:40'],
        email: 'required|string|email',
        mobile: 'required|string|numeric',
        address: 'required|string|min:2|max:300',
        country: 'required|string|min:2|max:300',
        state: 'required|string|min:2|max:300',
        city: 'required|string|min:2|max:300',
        category: 'required|string|min:2|max:300',
        programmingLanguage: 'required|string|min:2|max:300',
        linkedinUrl: 'required|string|min:5|max:300',
        gitHubRepoLink: 'required|string|min:5|max:300',
      },
      {
        'string.firstname': 'This :attribute has to be a string value.',
        'string.lastname': 'This :attribute has to be a string value.',
        'min.firstname':
          'This :attribute is too short. Min length is :min characters.',
        'min.lastname':
          'This :attribute is too short. Min length is :min characters.',
        'max.firstname':
          'This :attribute is too long. Max length is :max characters.',
        'max.lastname':
          'This :attribute is too long. Max length is :max characters.',
        'regex.firstname':
          'The :attribute you have entered contains invalid character(s).',
        'regex.lastname':
          'The :attribute you have entered contains invalid character(s).',
        'required.email':
          'Please you have to specify a valid :attribute',
        'string.email': 'Sorry, the :attribute has to be a string value.',
        'email.email': 'Please enter a valid :attribute address.',
        'string.address': 'This :attribute has to be a string value.',
        'string.country': 'This :attribute has to be a string value.',
        'string.state': 'This :attribute has to be a string value.',
        'string.city': 'This :attribute has to be a string value.',
        'string.category': 'This :attribute has to be a string value.',
        'string.programmingLanguage': 'This :attribute has to be a string value.',
        'string.linkedinUrl': 'This :attribute has to be a string value.',
        'string.gitHubRepoLink': 'This :attribute has to be a string value.',
        'min.address':
          'This :attribute is too short. Min length is :min characters.',
        'min.country':
          'This :attribute is too short. Min length is :min characters.',
        'min.state':
          'This :attribute is too short. Min length is :min characters.',
        'min.city':
          'This :attribute is too short. Min length is :min characters.',
        'min.category':
          'This :attribute is too short. Min length is :min characters.',
        'min.programmingLanguage':
          'This :attribute is too short. Min length is :min characters.',
        'min.linkedinUrl':
          'This :attribute is too short. Min length is :min characters.',
        'min.gitHubRepoLink':
          'This :attribute is too short. Min length is :min characters.',
        'max.address':
          'This :attribute is too long. Max length is :max characters.',
        'max.country':
          'This :attribute is too long. Max length is :max characters.',
        'max.state':
          'This :attribute is too long. Max length is :max characters.',
        'max.city':
          'This :attribute is too long. Max length is :max characters.',
        'max.category':
          'This :attribute is too long. Max length is :max characters.',
        'max.programmingLanguage':
          'This :attribute is too long. Max length is :max characters.',
        'max.linkedinUrl':
          'This :attribute is too long. Max length is :max characters.',
        'max.gitHubRepoLink':
          'This :attribute is too long. Max length is :max characters.',
        'required.firstname':
          'Please you have to specify a valid :attribute',
        'required.lastname':
          'Please you have to specify a valid :attribute',
        'required.mobile':
          'Please you have to specify a valid :attribute',
        'required.country':
          'Please you have to specify a valid :attribute',
        'required.state':
          'Please you have to specify a valid :attribute',
        'required.address':
          'Please you have to specify a valid :attribute',
        'required.programmingLanguage':
          'Please you have to specify a valid :attribute',
        'required.linkedinUrl':
          'Please you have to specify a valid :attribute',
        'required.gitHubRepoLink':
          'Please you have to specify a valid :attribute',
      }
    );
    if (validation.passes()) {
      return next();
    }
    return res.status(400).json({
      errors: validation.errors.all()
    });
  }
}
export default UserInputValidation;
