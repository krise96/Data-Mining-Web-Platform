(function() {
    var module = angular.module('MainModule', ['ngComponentRouter', 'ngCookies']);
    
	module.value('$routerRootComponent', 'rootElement');
    
    module.run(function(dataFactory, $cookies, $rootScope){
        dataFactory.token = $cookies.get('token');
        dataFactory.email = $cookies.get('email');
        if(dataFactory.token != null){
            //ТУТ ТІПА МАЄ БУТИ ЗАПИТ НА ПЕРЕВІРКУ АКТУАЛЬНОСТІ ТОГО ТОКЕНА
            
            
            dataFactory.authenticated = true;
        }
        // $rootScope.$on("$locationChangeStart", function(event, next, current) { 
        //     console.log(next);
        //     console.log(current);
        //      if(next == 'http://localhost:8000/#/login'){
        //          console.log('HER');
        //           event.preventDefault(); 
        //      };
        // })();
    });
	
})();