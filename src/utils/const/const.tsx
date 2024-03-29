export const Routes = {
  main: '/',
  aboutUs: '/about-us',
  forms: '/forms',
};

export const RoutesNames = {
  main: 'Main',
  aboutUs: 'About us',
  forms: 'Forms',
};

export const ROUTES = {
  main: {
    path: '/',
    name: 'Main',
  },
  aboutUs: {
    path: '/about-us',
    name: 'About us',
  },
  forms: {
    path: '/forms',
    name: 'Forms',
  },
};

export const enum LocalStorageKeys {
  searchValue = 'searchValue',
  formData = 'formData',
}

export const URL_USERS = 'https://jsonplaceholder.typicode.com/users';

// export const enum InputKeys {
//   subscribeEmail = 'subscribeEmail',
//   subscribeSms = 'subscribeSms',
//   sexuality = 'sexuality',
//   gender = 'gender',
//   img = 'img',
//   imgName = 'imgName',
//   delivery = 'delivery',
//   time = 'time',
// }

export const INITIAL_STATE = {
  name: '',
  surname: '',
  city: 'Monterey',
  country: 'Russia',
  delivery: '',
  gender: '',
  sexuality: '',
  zipcode: '',
  birthday: '',
  time: '',
  img: '',
  checkboxes: [],
};

export const enum Messages {
  successSent = 'Поздравляем вас, отправка формы произошла весьма успешно',
  searchLabel = 'To find something focus into the input and click Enter',
  searchPlaceholder = 'Search here, motherfucker',
  didntFind = 'Your search query did not match any object in the server',
  didError = 'Some error occured',
}
