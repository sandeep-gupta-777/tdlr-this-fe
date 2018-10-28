// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firestore:{
    apiKey: "AIzaSyBYCJzo2V0AdHIwRC3NSyjOz7gkNbpHyfA",
    authDomain: "fs1-prod-483cf.firebaseapp.com",
    databaseURL: "https://fs1-prod-483cf.firebaseio.com",
    projectId: "fs1-prod-483cf",
    storageBucket: "fs1-prod-483cf.appspot.com",
    messagingSenderId: "903851726192"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
