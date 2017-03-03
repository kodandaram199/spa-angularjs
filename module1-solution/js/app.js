(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    var foodItemsList = [];
    $scope.foodItems = "";
    $scope.message = '';
    $scope.checkLunchItems = function() {
      $scope.foodItems = $scope.foodItems.trim();
      if(!$scope.foodItems){
        $scope.message = 'Please enter data first';
        $scope.messageType = 'danger';
      }else {
        foodItemsList = $scope.foodItems.split(',');
        var lengthOfFoodItemsList = foodItemsList.length;
        if( lengthOfFoodItemsList <= 3 ){
          $scope.message = 'Enjoy!';
          $scope.messageType = 'success';
        }else {
          $scope.message = 'Too much!';
          $scope.messageType = 'warning';
        }
      }
    }
  }
})();
