(function() {
    var module=angular.module('MainModule');
    
    function RegisterController($scope, $http){
       var vm = this;
       vm.register = function () {
           console.log(vm.name);
           console.log(vm.secondName);
           console.log(vm.email);
           console.log(vm.password);
           //$http......(Якщо ти все таки вирішиш попробувати звідси надіслати)
       }
    };
    
    
     module.component('register', {
            templateUrl: 'angular-files/templates/register.html',
            controller: RegisterController,
            controllerAs: 'register'
          
    });
})();