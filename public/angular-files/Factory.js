(function() {
    var module=angular.module('MainModule');
        module.factory('dataFactory', data);
    function data() {
        return{
            token: null,
            authenticated: false,
            email:  null
        }
    }
     
})();