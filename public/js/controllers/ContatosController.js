angular.module('contatooh').controller( 'ContatosController' ,
  function($scope, $http) {
  	$scope.total = 0;
  	$scope.filtro = "";
  	$scope.incrementa = function(){
  		$scope.total ++;
  	};
	$scope.contatos = [
		{
			"_id": 1,
			"nome": "Contato angular ",
			"email": "email1@email.com"
		},
		{
			"_id": 2,
			"nome": "Contato angular 2",
			"email": "email2@email.com"
		},
		{
			"_id": 3,
			"nome": "Contato angular 3",
			"email": "email3@email.com"
		}
	];
  }
);
