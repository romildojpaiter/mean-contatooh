angular.module('contatooh').controller('ContatoController',
	function($scope, $routeParams, $resource){

		console.log($routeParams.contatoId);

		var Contato = $resource('/contato');
		
	}
);