var quizApp = angular.module('quiz', ['ngRoute']);

quizApp.config(function($routeProvider) {
  //set up routes
  $routeProvider
    .when('/', {
      controller: 'QuizController',
      templateUrl: 'app_pages/main.html'
    })

    .when('/type', {
      templateUrl: 'app_pages/quizA_start.html'
    })

    .when('/q1', {
      controller: 'QuizAController',
      templateUrl: 'app_pages/quizA_1.html'
    })

    .when('/result', {
      controller: 'QuizController',
      templateUrl: 'app_pages/quizA_result.html'
    })

    .otherwise( {
    	redirectTo: '/'
    })
});


quizApp.controller('QuizController', function($scope) {
  $scope.quizData = {};
});

quizApp.controller('QuizAController', function($scope) {
  $scope.quizData = {};
  $scope.processQuiz = function() {
        alert('awesome!');  
    };
    
});