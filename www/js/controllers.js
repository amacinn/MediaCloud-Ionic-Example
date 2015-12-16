angular.module('mc.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('SearchCtrl', function($scope, $stateParams, MediaCloud){
  $scope.keyword = $stateParams.keyword;
  $scope.data = {};
  $scope.service = MediaCloud;
  $scope.data.sentenceCount = null;
  $scope.$watch('service.results', function(results){
  	if(results!=null){
  		console.log("watch got results = "+results.count);
  		$scope.data.sentenceCount = results.count;
  	} else {
  		console.log("watch go null");
  	}
  });
  console.log("Calling MC from ctrl");
  MediaCloud.recentMentions($scope.keyword);
})

.controller('SearchTimePeriod', function($scope, $stateParams, MediaCloud){
  $scope.keyword = $stateParams.keyword;
  $scope.startDate = $stateParams.startDate; //left-side should match HTML, right side should match the router in app.js
  $scope.endDate = $stateParams.endDate;  
  $scope.data = {};
  $scope.service = MediaCloud;
  $scope.data.sentenceCount = null;
  $scope.$watch('service.results', function(results){
    if(results!=null){
      console.log("watch got results = "+results.count);
      $scope.data.sentenceCount = results.count;
    } else {
      console.log("watch go null");
    }
  });
  console.log("Calling MC from ctrl");
  MediaCloud.recentMentions($scope.keyword);
})

;


