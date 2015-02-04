angular.module('contatooh').controller('ContatoController',
	function($scope, $routeParams, Contato) {

		console.log($routeParams.contatoId);

		$scope.mensagem = {texto: ''};

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
			$scope.contato = new Contato();
		}
		
		$scope.salvar = function() {
            console.log("Acessou a função salvar");
            // console.log(Contato);
			$scope.contato.$save()
				.then(function(){
					$scope.mensagem = {texto: "Contato salvo com sucesso!"};
                    // Limpa o formulário
					$scope.contato = new Contato();
				})
				.catch(function(){
					$scope.mensagem = {texto: "Não foi possível salvar"};
				});
		};
		
	}
);