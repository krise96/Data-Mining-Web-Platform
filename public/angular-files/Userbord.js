(function() {
    var module=angular.module('MainModule');
    
    function UserBordController($scope, $http, dataFactory){
        $scope.dataFactory = dataFactory;
       console.log(dataFactory);
    };
    
    
     module.component('userbord', {
            templateUrl: 'angular-files/templates/Userbord.html',
            controller: UserBordController,
            controllerAs: 'userbord'
          
    });
})();