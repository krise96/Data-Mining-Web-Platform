(function() {
    var module = angular.module('MainModule', ['ngComponentRouter', 'ngCookies']);
    
	module.value('$routerRootComponent', 'rootElement');
    
    module.run(function(dataFactory, $cookies){
        dataFactory.token = $cookies.get('token');
        dataFactory.email = $cookies.get('email');
        if(dataFactory.token != null){
            //ТУТ ТІПА МАЄ БУТИ ЗАПИТ НА ПЕРЕВІРКУ АКТУАЛЬНОСТІ ТОГО ТОКЕНА
            
            
            dataFactory.authenticated = true;
        }
        
    });
	
})();