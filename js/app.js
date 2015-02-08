/* App Modules */

var answerValue = 0;

var pokeApp = angular.module('pokeApp', ['ngRoute'])

/* Routes */

pokeApp.config(['$routeProvider',
  function($routeProvider) {
  //set up routes
  $routeProvider
    .when('/qA', {
      templateUrl: 'app_pages/quizA.html',
      controller: 'pokeController'
    })

    .when('/result', {
      templateUrl: 'app_pages/quizA_result.html',
      controller: 'pokeController'
    })

    .otherwise( {
    	templateUrl: 'app_pages/main.html'
    });
}]);
