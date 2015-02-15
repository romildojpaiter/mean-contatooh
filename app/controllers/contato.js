module.exports = function(app) {

	var controller = {};
    var Contato = app.models.contato;
    
	controller.listarContatos = function(req, res) {
        Contato.find().exec()
        .then(
            function(contatos){
                res.json(contatos);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
	};

	controller.obtemContato = function(req, res){
        var _id = req.params.id;
        Contato.findById(_id).exec()
        .then(
            function(contato) {
                if (!contato) throw new Error("Contato não encontrado");
                
                res.json(contato);
            },
            function(erro){
                console.log(erro);
                res.status(404).json(erro);
            }
        );
	};

	controller.removeContato = function(request, response) {
	}

	controller.salvarContato = function(request, response) {
        
	}

	return controller;

}