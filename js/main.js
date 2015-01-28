var quizApp = angular.module('quiz', ['ngRoute']);

quizApp.config(function($routeProvider) {
  //set up routes
  $routeProvider
    .when('/type', {
      templateUrl: 'app_pages/quizA_start.html'
    })

    .otherwise( {
    	templateUrl: 'app_pages/main.html'
    })
});