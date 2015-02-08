pokeApp.controller('pokeController', function($scope) {
  /* var questions = {
    q1: {
        question: "WHAT WOULD YOU USE TO PROTECT YOURSELF?",
    options: ["HARDEN", "WITHDRAW", "REFLECT", "DETECT"],
    },
    q2: {
      question: "WHICH ATTACK SUITS YOU BEST?",
      options: ["FLAMETHROWER", "HYDRO PUMP", "SOLARBEAM", "SPLASH"],
      nextUrl: '#quiz/q3',
    },
  } */

  $scope.answerValue = 0;
  $scope.questionValue = 0;

  $scope.updateOutput = function (btn) {
        $scope.answerValue += btn;
        $scope.questionValue += 1;
    };

 });
