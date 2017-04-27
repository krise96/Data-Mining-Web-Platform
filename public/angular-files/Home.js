(function() {
    var module=angular.module('MainModule');
    
    function HomeController($scope, $http){
       var vm =this;
    };
    
    
     module.component('home', {
            templateUrl: 'angular-files/templates/home.html',
            controller: HomeController,
            controllerAs: 'home'
          
    });
})();