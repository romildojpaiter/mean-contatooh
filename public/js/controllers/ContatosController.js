angular.module('contatooh').controller( 'ContatosController' ,
  function($scope, $resource) {
  	
  	$scope.filtro = "";
  	$scope.contatos = [];
	
	var Contato = $resource('/contatos');

	function buscaContatos(){
		Conatato.query(
			function(contatos){
				$scope.contatos = contatos;
			},
			function(error){
				console.log("Não foi possível obter a lista de contatos");
				console.log(error);
			}
		);		
	}
	
	$scope.init = function() {
		buscaContatos();
		//tarefa1();
		//tarefa2();
	};
	
	$scope.init();
  }
);
