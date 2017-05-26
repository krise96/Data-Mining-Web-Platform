(function() {
    var module = angular.module('MainModule', ['ngComponentRouter', 'ngCookies']);
    
	module.value('$routerRootComponent', 'rootElement');
	
})();