(function() {
    var module=angular.module('MainModule');
    //Подивитись до того при нагоді, бо тут якась діч.
    function AddTaskController($scope, $http, dataFactory, Upload, $window, $location){
        var vm = this;
        $scope.dataFactory = dataFactory;
        $scope.errortaskshow = false;
        vm.title = '';
        vm.description = '';
        vm.file;
        $scope.send = function(){
            
            let str = vm.description;
           str = str.replace(/\r|\n/g, '$')
               
        
            Upload.upload({
                url: '/api/createTask', //webAPI exposed to upload the file
                headers: {"title": vm.title, "description": str},
                data:{file:vm.file} //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                console.log(resp);
                if(resp.status == 200){ //validate success
                    $location.path('/userbord');
                } else {
                    $window.alert('an error occured');
                }
            }, function (resp) { //catch error
                console.log('Error status: ' + resp.status + ' ' + resp.message);
                $window.alert('Error status: ' + resp.status + ' ' + resp.message);
            }, function (evt) { 
                console.log(evt);
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
            });
        }






    };
    
    
     module.component('addtask', {
            templateUrl: 'angular-files/templates/Addtask.html',
            controller: AddTaskController,
            controllerAs: 'Addtask'
          
    });
})();