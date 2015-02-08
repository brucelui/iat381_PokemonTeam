quizApp.controller('mainController', function($scope, $route) {
    $scope.answers = [{
      Answer: "0"
    }];

    $scope.addAnswer = function () {
    	$scope.answers.push({
    		quizAnswer: $scope.Answers.answer
    	});
    };

    console.log(quizApp.answers);
});