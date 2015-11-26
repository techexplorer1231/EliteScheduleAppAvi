(function() {
  'use strict';
  angular.module('starter')
    /*.factory('Items', ['$firebaseArray', function ($firebaseArray) {
      var itemsRef = new Firebase("https://incandescent-fire-7180.firebaseio.com/items");
      return $firebaseArray(itemsRef);
    }])
    .factory('Items1', function ($firebaseArray) {
      var itemsRef = new Firebase("https://incandescent-fire-7180.firebaseio.com");
      return $firebaseArray(itemsRef);
    });*/

    .factory('StudentsList', ['$firebaseArray', function ($firebaseArray) {
      var itemsRef = new Firebase("https://incandescent-fire-7180.firebaseio.com/students");
      //console.log($firebaseArray(itemsRef));
      return $firebaseArray(itemsRef);
    }]);
})();
