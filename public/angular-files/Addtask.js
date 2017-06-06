(function() {
    var module=angular.module('MainModule');
    //Подивитись до того при нагоді, бо тут якась діч.
    function AddTaskController($scope, $http, dataFactory, Upload, $window){
        var vm = this;
        $scope.dataFactory = dataFactory;
        $scope.errortaskshow = false;
        vm.title = '';
        vm.description = '';
        vm.file;
        $scope.send = function(){
            Upload.upload({
                url: '/api/createTask', //webAPI exposed to upload the file
                headers: {"title": vm.title, "description": vm.description},
                data:{file:vm.file} //pass file as data, should be user ng-model
            }).then(function (resp) { //upload function returns a promise
                if(resp.data.error_code === 0){ //validate success
                    $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
                } else {
                    $window.alert('an error occured');
                }
            }, function (resp) { //catch error
                console.log('Error status: ' + resp.status);
                $window.alert('Error status: ' + resp.status);
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