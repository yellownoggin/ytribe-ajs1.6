namespace app {
    'use strict';


    // Initialize Firebase
    // TODO: this should put in the area of best practice
    // see  https://github.com/firebase/angularfire/blob/master/docs/reference.md#initialization
     const config = {
       apiKey: 'AIzaSyAev5B591IvR4DlNtyAQmsoqGwcC-dtZpE',
       authDomain: 'ytribe-ajs16.firebaseapp.com',
       databaseURL: 'https://ytribe-ajs16.firebaseio.com',
       projectId: 'ytribe-ajs16',
       storageBucket: 'ytribe-ajs16.appspot.com',
       messagingSenderId: '1062731323167'
     };
     // TODO: why is this underlized with types firebase there
     // thought you could also add a workaround... but what is best practice
     firebase.initializeApp(config);

    angular
        .module('app.core')
        .config(initDebug)
        .config(initRouter)
        .config(initTheme)
        .constant('latinize', window.latinize);

        /**
     * Toggle debug info data (better disabled in production environments)
     * https://docs.angularjs.org/guide/production
     */
    // @ngInject
    function initDebug($compileProvider) {
        $compileProvider.debugInfoEnabled(true);
    }

    /**
     * initRouter - Initialize the router's default behaviors
     */
    // @ngInject
    function initRouter($locationProvider, $urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
    }

    /**
     * Configuring theme/colors for the app
     * @param  {[type]} $mdThemingProvider [description]
     * @return {[type]}                    [description]
     */
    function initTheme($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('yellow');
    }
};
