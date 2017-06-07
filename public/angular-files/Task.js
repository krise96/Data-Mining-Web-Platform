(function() {
    var module=angular.module('MainModule');
    
    function TaskController($scope, $http, $location){
       var vm =this;
       var pam = $location.search();
       vm.title;
       vm.description;
       vm.task;
       $http.post('/api/getTask', {"taskId":pam.id})
        .success(function(message) {
                vm.title = message.message.title;
                let str = message.message.description;
                str = str.split('$').join('<br>');
                vm.description = str;
            })
            .error(function (message) { 
                console.log(message);
            });

    };
    
    
     module.component('task', {
            templateUrl: 'angular-files/templates/Task.html',
            controller: TaskController,
            controllerAs: 'task'
    });
})();