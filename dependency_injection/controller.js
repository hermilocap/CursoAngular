angular.module("MyfirstApp",[])
.controller("FirstController", ["$scope",function(n) {
  n.nombre="Andrea";
  //$scope.nuevoComentario={comentario:"nuevo valor"};
n.nuevoComentario={};
  n.comentarios=[
    {
      comentario:"Buen tutorial",
      username:"Andrea"
    },
    {
      comentario:"Excelente tutorial",
      username:"Hermilo"
    }
  ];
  n.agregarComentario=function(){
  n.comentarios.push(n.nuevoComentario);
  }
}]);
