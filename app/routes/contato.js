module.exports = function(app) {
	
	var controller = app.controllers.contato;
	
	// app.get('/contatos/:id', controller.obtemContato

	app.route('/contatos')
		.get(controller.listarContatos)
		.post(controller.salvarContato);

	app.route('/contatos/:id')
		.get(controller.obtemContato)
		.delete(controller.removeContato);

	app.get('/about', function (req, res) {
  		res.send('about')
	})
}