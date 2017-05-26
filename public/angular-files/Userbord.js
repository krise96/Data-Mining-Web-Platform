(function() {
    var module=angular.module('MainModule');
    
    function UserBordController($scope, $http){
       var vm = this;
       
    };
    
    
     module.component('userbord', {
            templateUrl: 'angular-files/templates/Userbord.html',
            controller: UserBordController,
            controllerAs: 'userbord'
          
    });
})();