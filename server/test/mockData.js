const fakeUserData = {
  validDetails: {
    firstname: 'John',
    lastname: 'Brown',
    mobile: '07098573542',
    email: 'val.ezeh15@gmail.com',
    country: 'Nigeria',
    state: 'lagos',
    city: 'MaryLand',
    address: 'No 7 omitoro avenue',
    category: 'backend',
    linkedinUrl: 'https://www.linkedin.com/me/profile',
    gitHubRepoLink: 'https://www.github.com/wela',
    programmingLanguage: 'python'
  },
  invalidMobile: {
    firstname: 'John',
    lastname: 'Brown',
    mobile: '',
    email: 'making@gmail.com',
    country: 'Nigeria',
    state: 'lagos',
    city: 'MaryLand',
    address: 'No 7 omitoro avenue',
    category: 'backend',
    linkedinUrl: 'https://www.linkedin.com/me/profile',
    gitHubRepoLink: 'https://www.github.com/wela',
    programmingLanguage: 'python'
  },
  invalidCategory: {
    firstname: 'John',
    lastname: 'Brown',
    mobile: '08074037214',
    email: 'making@gmail.com',
    country: 'Nigeria',
    state: 'lagos',
    city: 'MaryLand',
    address: 'No 7 omitoro avenue',
    category: 'blank',
    linkedinUrl: 'https://www.linkedin.com/me/profile',
    gitHubRepoLink: 'https://www.github.com/wela',
    programmingLanguage: 'python'
  }
};

export default fakeUserData;
