(function() {
    var module=angular.module('MainModule');
    
function rootComponentController() {
    
}

     module.controller('menuController', function($scope, dataFactory, $cookies, $location){
           $scope.dataFactory = dataFactory;
           
           $scope.logout = function(){
               $cookies.remove('token');
               $cookies.remove('email');
               $cookies.remove('isAdmin');
               dataFactory.token = null;
               dataFactory.email = null;
               dataFactory.authenticated = false;
               dataFactory.isAdmin = false;
               $location.path('/register');
           }
           
     });

     module.component('rootElement', {
            controller: rootComponentController,
            templateUrl: './angular-files/templates/MainPage.html',
            $routeConfig: [{
                path: '/',
                name: 'Home',
                component: 'home'
            },{
                path: '/register',
                name: 'Register',
                component: 'register'
            },
            {
                path: '/login',
                name: 'Login',
                component: 'login'
            },
            {
                path: '/userbord',
                name: 'Userbord',
                component: 'userbord'
            },
            {
                path: '/addtask',
                name: 'Addtask',
                component: 'addtask'
            },
            {
                path: '/task/:id',
                name: 'Task',
                component: 'task'
            },
            {
                path: '/**',
                name: 'NotFound',
                component: 'notFound'
            }]  
    });
})();