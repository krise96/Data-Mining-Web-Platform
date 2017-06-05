(function() {
    var module=angular.module('MainModule');
    
    function LoginController($scope, $http, $cookies, dataFactory, $location){
       var vm = this;
       vm.emailError;
       vm.login = function () {
           let user = {
               "email": vm.email,
               "password": vm.password
           }

           $http.post('/api/authenticate', user)
           .success(function(message) {
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
            });
       }
    };
    
    
     module.component('login', {
            templateUrl: 'angular-files/templates/login.html',
            controller: LoginController,
            controllerAs: 'login'
          
    });
})();