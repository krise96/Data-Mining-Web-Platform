(function() {
    var module=angular.module('MainModule');
    
    function AddTaskController($scope, $http, dataFactory){
        $scope.dataFactory = dataFactory;
       
    };
    
    
     module.component('addtask', {
            templateUrl: 'angular-files/templates/Addtask.html',
            controller: AddTaskController,
            controllerAs: 'Addtask'
          
    });
})();