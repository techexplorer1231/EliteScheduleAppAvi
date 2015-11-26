(function() {
  'use strict';
  angular.module('starter')
    .factory('StudentDetailsService', ['$http','$firebaseArray', function ($http,$firebaseArray) {
      var itemsRef = new Firebase("https://incandescent-fire-7180.firebaseio.com/students");
      console.log("inside StudentDetailsService");
      var list= $firebaseArray(itemsRef);
      var service={
        getDataById:getDataById
      };
      return service;
      function getDataById(id){
        console.log("inside getDataById fxn of StudentDetailsService");
        var rec=list.$getRecord(id);
        console.log("success: "+JSON.stringify(rec));
        return rec;
      }
    }]);
})();
