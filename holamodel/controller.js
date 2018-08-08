
angular.module("MyfirstApp",[])
.controller("FirstController", function($scope) {
  $scope.nombre="Andrea";
  //$scope.nuevoComentario={comentario:"nuevo valor"};
$scope.nuevoComentario={};
  $scope.comentarios=[
    {
      comentario:"Buen tutorial",
      username:"Andrea"
    },
    {
      comentario:"Excelente tutorial",
      username:"Hermilo"
    }
  ];
  $scope.agregarComentario=function(){
    $scope.comentarios.push($scope.nuevoComentario);
  }
});
