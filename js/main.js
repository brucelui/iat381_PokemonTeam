var quizApp = angular.module('quiz', ['ngRoute']);

quizApp.config(function($routeProvider) {
  //set up routes
  $routeProvider
    .when('/type', {
      templateUrl: 'app_pages/quizA_start.html'
    })

    .when('/q1', {
      templateUrl: 'app_pages/quizA_1.html'
    })

    .when('/result', {
      templateUrl: 'app_pages/quizA_result.html'
    })

    .otherwise( {
    	templateUrl: 'app_pages/main.html'
    })
});
