// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {/*
    apiKey: "AIzaSyBpQugMuyU0ar-baz3D5sW481G3eVjBRCQ",
  authDomain: "road-trip-3d884.firebaseapp.com",
  databaseURL: "https://road-trip-3d884.firebaseio.com",
  projectId: "road-trip-3d884",
  storageBucket: "road-trip-3d884.appspot.com",
  messagingSenderId: "879914603895",*/
  apiKey: "AIzaSyBOzc47-rat5UMZtxu8Zv9Ug3hJU_5g5Ow",
  authDomain: "road-trip-companion.firebaseapp.com",
  databaseURL: "https://road-trip-companion-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "road-trip-companion",
  storageBucket: "road-trip-companion.appspot.com",
  messagingSenderId: "674424388814",
  appId: "1:674424388814:web:2800f043cdf9b014e3e49f",
  measurementId: "G-5PPGF47S1Y"
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoiZXJpa2dydW5uZXIiLCJhIjoiY2toa3NvbDNuMDY2aDM0cnQxZnZ3ZnZ4aSJ9.XwSIPlY0ShmP2GTadsvLHQ'
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
