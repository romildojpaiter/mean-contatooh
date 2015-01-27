angular.module('contatooh').controller( 'ContatosController' ,
  function($scope, $resource) {
  	
  	$scope.filtro = "";
  	$scope.contatos = [];
	
	var Contato = $resource('/contatos');
	var promise = Conatato.query().promise();
	
	promise
		.then(function(contatos){
			$scope.contatos = contatos;
		})
		.catch(function(error){
			console.log("Não foi possível obter a lista de contatos");
			console.log(error);
		});
	
  	/*
  	$http.get('/contatos')
  	.success(function(data){
  		$scope.contatos = data;
  	})
  	.error(function(statusText){
  		console.log("Não foi possível obter a lista de contatos");
  		console.log("statusText");
  	});
	*/
  }
);
