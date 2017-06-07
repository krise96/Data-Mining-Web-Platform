(function() {
    var module=angular.module('MainModule');
    
    function UserBordController($scope, $http, dataFactory){
        $scope.dataFactory = dataFactory;
        $scope.activeTasks;
        $scope.getActiveTasks = function (){
            $http.get('/api/activeTasks')
            .success(function(message){
                $scope.activeTasks = message.message;
                console.log(message.message);
            })
             .error(function (message) { 
                console.log(message);
            });
        }
         $scope.getActiveTasks();
    };
    
    
     module.component('userbord', {
            templateUrl: 'angular-files/templates/Userbord.html',
            controller: UserBordController,
            controllerAs: 'userbord'
          
    });
})();