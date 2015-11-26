(function() {
  'use strict';
  angular.module('starter')
    .controller('studentDetailsController', ['$scope','StudentsList','StudentDetailsService', function ($scope,StudentsList,StudentDetailsService) {
      //$scope.listOfStudents=StudentsList;
      var vm = this;
      vm.studentDetails = "ss";
      vm.listOfStudents=StudentsList;
      console.log("inside studentDetailsController");
      vm.getStudentData=function(id){
        console.log("inside getStudentData fxn of studentDetailsController");
        vm.studentDetails = StudentDetailsService.getDataById(id);
        console.log("avinash: " + JSON.stringify(vm.studentDetails));
        return vm.studentDetails;
      };
  }]);
})();
