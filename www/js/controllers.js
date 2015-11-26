(function() {
  'use strict';
  angular.module('starter.controllers', [])

    .controller('AppCtrl',['$scope', '$ionicModal', '$timeout', function ($scope, $ionicModal, $timeout) {

      /*.controller('AppCtrl', function($scope, $ionicModal, $timeout,Items,Items1) {
       $scope.item=Items;
       $scope.item1=Items1;
       // With the new view caching in Ionic, Controllers are only called
       // when they are recreated or on app start, instead of every page change.
       // To listen for when this page is active (for example, to refresh data),
       // listen for the $ionicView.enter event:
       //$scope.$on('$ionicView.enter', function(e) {
       //});
       $scope.addItem = function() {
       $scope.itemsss=Items;
       var name = prompt("What do you need to buy?");
       var bana=prompt("What do you need to bana?");
       if (name) {
       $scope.itemsss.$add({
       "name": name,
       "bana": bana
       });
       }
       };*/


      //$scope.listOfStudents=StudentsList;


// Form data for the login modal
      $scope.loginData = {};

      // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('student/login.html', {
        scope: $scope
      }).then(function (modal) {
        $scope.modal = modal;
      });
      $scope.fgh = {
        background: 'url(img/depositphotos.jpg)',
      };
      // Triggered in the login modal to close it
      $scope.closeLogin = function () {
        $scope.modal.hide();
      };

      // Open the login modal
      $scope.login = function () {
        $scope.modal.show();
      };
      $scope.asdf = "Avinash";
      // Perform the login action when the user submits the login form
      $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
          $scope.closeLogin();
        }, 1000);
      };
    }]);
  /*.controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  })

    .controller('PlaylistCtrl', function($scope, $statePars) {
    });*/
})();

