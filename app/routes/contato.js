function verificaAutenticacao(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.status('401').json('Não autoriazado');
    }
} 

module.exports = function(app) {
    
    var controller = app.controllers.contato;

    
	/*app.route('/contatos')
		.get(controller.listarContatos)
		.post(controller.salvarContato);

	app.route('/contatos/:id')
		.get(controller.obtemContato)
		.delete(controller.removeContato);*/

	app.route('/contatos')
		.get(verificaAutenticacao, controller.listarContatos)
		.post(verificaAutenticacao, controller.salvarContato);

	app.route('/contatos/:id')
		.get(verificaAutenticacao, controller.obtemContato)
		.delete(verificaAutenticacao, controller.removeContato);

}