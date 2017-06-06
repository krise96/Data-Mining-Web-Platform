(function() {
    var module=angular.module('MainModule');
    
    function RegisterController($scope, $http, dataFactory, $cookies, $location){
       var vm = this;
       vm.register = function () {
           let user = {
               "email":vm.email, 
               "username": vm.userName, 
               "password": vm.password
           }
           console.log(user);
           $http.post("/api/register", user).success(function(message) {
                $cookies.put('token', message.token);
                $cookies.put('email', user.email);
                $cookies.put('isAdmin', message.isAdmin);
                dataFactory.isAdmin = message.isAdmin;
                dataFactory.token = message.token;
                dataFactory.authenticated = true;
                dataFactory.email = user.email; 
                $location.path('/userbord');
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