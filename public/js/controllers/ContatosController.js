angular.module('contatooh').controller( 'ContatosController' ,
  function($scope, $resource) {
  	
  	$scope.filtro = "";
  	$scope.contatos = [];
	
	var Contato = $resource('/contatos/:id');

	function buscaContatos(){
		Contato.query(
			function(contatos){
				$scope.contatos = contatos;
			},
			function(error){
				console.log("Não foi possível obter a lista de contatos");
				console.log(error);
			}
		);		
	}

	$scope.remove = function(contato) {
		console.log(contato);
		Contato.delete({id: contato._id},
			buscaContatos,
			function(error){
				console.log("Não foi possivel remover o contato");
				console.log(error);
			}
		);
		/*var promise = Contato.delete({id: contato._id}).$promise;
		promise
		 .then(buscaContatos)
		 .catch(function(error){
		 	console.log("Não foi possivel remover o contato");
		 	console.log(error);
		 });*/
	}
	
	$scope.init = function() {
		buscaContatos();
		//tarefa1();
		//tarefa2();
	}
	
	$scope.init();

});
