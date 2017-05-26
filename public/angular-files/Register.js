(function() {
    var module=angular.module('MainModule');
    
    function RegisterController($scope, $http){
       var vm = this;
       vm.register = function () {
           let user = {
               "email":vm.email, 
               "username": vm.userName, 
               "password": vm.password
           }
           console.log(user);
           $http.post("/api/register", user).success(function(message) {
                console.log(message);
            })
            .error(function (message) {
                console.log(message);
            })
       }
    };
    
    
     module.component('register', {
            templateUrl: 'angular-files/templates/register.html',
            controller: RegisterController,
            controllerAs: 'register'
          
    });
})();