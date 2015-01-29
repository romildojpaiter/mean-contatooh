angular.module('contatooh').controller('ContatoController',
	function($scope, $routeParams, $resource){

		console.log($routeParams.contatoId);

		$scope.mensagem = {texto: ''};

		var Contato = $resource('/contatos/:id');

		if ($routeParams.contatoId) {
			Contato.get({id: $routeParams.contatoId},
				function(contato){
					$scope.contato = contato;
					// console.log(contato);
				},
				function(error){
					$scope.mensagem = {
						texto: "Não foi possível obter o contato solicitado."
					}
				}
			);
		} else {
			$scope.contato = {};
		}
		
	}
);