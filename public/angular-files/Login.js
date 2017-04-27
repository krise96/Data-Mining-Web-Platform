(function() {
    var module=angular.module('MainModule');
    
    function LoginController($scope, $http){
       var vm = this;
       vm.login = function () {
           console.log(vm.email);
           console.log(vm.password);
       }
    };
    
    
     module.component('login', {
            templateUrl: 'angular-files/templates/login.html',
            controller: LoginController,
            controllerAs: 'login'
          
    });
})();