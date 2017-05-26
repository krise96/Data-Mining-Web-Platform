(function() {
    var module=angular.module('MainModule');
    
    function LoginController($scope, $http, $cookies, dataFactory){
       var vm = this;
       vm.login = function () {
           let user = {
               "email": vm.email,
               "password": vm.password
           }
           $http.post('/api/authenticate', user)
           .success(function(message) {
                $cookies.put('token', message.token);
                dataFactory.token = message.token;
                dataFactory.authenticated = true;
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