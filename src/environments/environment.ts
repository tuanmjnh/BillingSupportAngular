// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDszmjGYfp4v4_WlB706kPcCVLR5XVSBC0',
    authDomain: 'billingsupportangular.firebaseapp.com',
    databaseURL: 'https://billingsupportangular.firebaseio.com',
    projectId: 'billingsupportangular',
    storageBucket: '',
    messagingSenderId: '244361248946'
  }
};
