'use strict';

/**
 * @ngdoc function
 * @name carApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the carApp
 */
angular.module('carApp')
    .controller('AppCtrl', 
    function (
      $scope, 
      $location, 
      $rootScope, 
      $http, 
      API_ENDPOINT) {

  $scope.amount = {};
  $scope.amount.total = 340000;

  $rootScope.calculate = function() {
    $scope.amount.total = ($scope.slider.value * $scope.slider2.value*1000)+($scope.slider1.value * $scope.slider2.value*1000)-($scope.slider3.value*1000);
  };

$scope.slider = {
  value: 30,
  options: {
      floor: 1,
      ceil: 140,
      step: 1,
      onChange: function(id) {
        console.log('on change ' + $scope.slider.value);
        $rootScope.calculate();
      },
      showTicksValues: true,
      stepsArray: [
              {value: 20, legend: '20шт'},
              {value: 30},
              {value: 40, legend: '40шт'},
              {value: 50},
              {value: 60, legend: '60шт'},
              {value: 70},
              {value: 80, legend: '80шт'},
              {value: 90},
              {value: 100, legend: '100шт'},
              {value: 110},
              {value: 120, legend: '120шт'},
              {value: 130},
              {value: 140, legend: '140шт'}
      ]
  }
};


$scope.slider1 = {
  value: 40,
  options: {
      floor: 1,
      ceil: 140,
      step: 1,
      onChange: function(id) {
        console.log('on change ' + $scope.slider.value);
        $rootScope.calculate();
      },
      showTicksValues: true,
      stepsArray: [
              {value: 20, legend: '20шт'},
              {value: 30},
              {value: 40, legend: '40шт'},
              {value: 50},
              {value: 60, legend: '60шт'},
              {value: 70},
              {value: 80, legend: '80шт'},
              {value: 90},
              {value: 100, legend: '100шт'},
              {value: 110},
              {value: 120, legend: '120шт'},
              {value: 130},
              {value: 140, legend: '140шт'}
      ]
  }
};

$scope.slider2 = {
  value: 5,
  options: {
      floor: 1,
      ceil: 140,
      step: 1,
      onChange: function(id) {
        console.log('on change ' + $scope.slider.value);
        $rootScope.calculate();
      },
      showTicksValues: true,
      stepsArray: [
              {value: 1, legend: '1т.р'},
              {value: 2},
              {value: 3, legend: '3т.р'},
              {value: 4},
              {value: 5, legend: '5т.р'},
              {value: 6},
              {value: 7, legend: '7т.р'},
              {value: 8},
              {value: 9, legend: '9т.р'},
              {value: 10},
              {value: 11, legend: '11т.р'},
              {value: 12},
              {value: 13, legend: '13т.р'}
      ]
  }
};

$scope.slider3 = {
  value: 10,
  options: {
      floor: 1,
      ceil: 140,
      step: 1,
      onChange: function(id) {
        console.log('on change ' + $scope.slider.value);
        $rootScope.calculate();
      },
      showTicksValues: true,
      stepsArray: [
              {value: 5, legend: '5т.р'},
              {value: 10},
              {value: 15, legend: '15т.р'},
              {value: 20},
              {value: 25, legend: '25т.р'},
              {value: 30},
              {value: 35, legend: '35т.р'},
              {value: 40},
              {value: 45, legend: '45т.р'},
              {value: 50},
              {value: 55, legend: '55т.р'},
              {value: 60},
              {value: 65, legend: '65т.р'}
      ]
  }
};

});
