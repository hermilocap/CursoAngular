angular.module("TodoDoList",["LocalStorageModule"])
.controller("ToDoController",function($scope,localStorageService){
  if (localStorageService.get("angular-todolist")) {
      $scope.todo=localStorageService.get("angular-todolist");
  }else {
    $scope.todo=[];
  }
$scope.$watchCollection('todo',function(newValue,oldValue){
    localStorageService.set("angular-todolist",$scope.todo);
});
$scope.AddActv=function(){
    $scope.todo.push($scope.newActv);
    $scope.newActv={};
    //localStorageService.set("angular-todolist",$scope.todo);
}
// $scope.Clean=function(){
//   $scope.todo=[];
// //localStorageService.set("angular-todolist",$scope.todo);
// }

});
