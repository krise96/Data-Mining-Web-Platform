(function() {
    var module=angular.module('MainModule');
    
function rootComponentController() {
    
}
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
                path: '/**',
                name: 'NotFound',
                component: 'notFound'
            }]  
    });
})();