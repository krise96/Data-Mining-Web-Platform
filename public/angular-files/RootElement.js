(function() {
    var module=angular.module('MainModule');
    
class rootComponentController {
    constructor() {}
}

rootComponentController.$inject = [];

     module.component('rootElement', {
            controller: rootComponentController,
            templateUrl: './angular-files/templates/MainPage.html',
            $routeConfig: [{
                path: '/',
                name: 'Home',
                component: 'home',
            },{
                path: '/register',
                name: 'Register',
                component: 'register',
            },
            {
                path: '/login',
                name: 'Login',
                component: 'login',
            },
            {
                path: '/**',
                name: 'NotFound',
                component: 'notFound'
            }]  
    });
})();