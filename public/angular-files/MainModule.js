(function() {
    var module = angular.module('MainModule', ['ngComponentRouter', 'ngCookies']);
    
	module.value('$routerRootComponent', 'rootElement');
    

    function getStatus(dataFactory, $location){
        var mustBeAuthenticated = ['/userbord'];
        var mustBeUnAuthenticated = ['/login', '/register', '/'];
        if(dataFactory.authenticated == false){
            if(mustBeAuthenticated.indexOf($location.path()) != -1){
                console.log($location.path());
                $location.path('/register');
            }
        }
        else{
            if(mustBeUnAuthenticated.indexOf($location.path()) != -1){
                console.log($location.path());
                $location.path('/userbord');
            }
        }

    }



    module.run(function(dataFactory, $cookies, $rootScope, $location){
        dataFactory.token = $cookies.get('token');
        dataFactory.email = $cookies.get('email');
        dataFactory.isAdmin = $cookies.get('isAdmin');
        if(dataFactory.token != null){
            //ТУТ ТІПА МАЄ БУТИ ЗАПИТ НА ПЕРЕВІРКУ АКТУАЛЬНОСТІ ТОГО ТОКЕНА
            dataFactory.authenticated = true;
        }
        
        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            getStatus(dataFactory, $location);
        });
    });
	
})();