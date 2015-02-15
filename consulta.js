var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('54d249bf8ad6295271b4153d');

MongoClient.connect('mongodb://localhost:27017/contatooh',
    function(erro, db){
        if(erro) throw err;
        db.collection('contatos').findOne({_id: _idProcurado},
            function(erro, contato){
                if(erro) throw err;
                console.log(contato);
            }
        );
    }
);