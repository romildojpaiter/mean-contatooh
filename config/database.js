var mongoose = require('mongoose');

module.exports = function(uri) {
    
    // mongoose.connect(uri);
    mongoose.connect(uri, {server: {poolSize: 15}});
    
    mongoose.connection.on('connected', function() {
        console.log('Mongoose! Conectado em ' + uri);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose! Desconectado de ' + uri);
    });

    mongoose.connection.on('error', function(erro) {
        console.log('Mongoose! Erro ao conectar ' + erro);
    });
    
    // fechando as conexoes do mongodb, por meio do process
    process.on('SIGINIT', function() {
        mongoose.connection.close(function() {
            console.log('Mongoose desconectado pelo términal da aplicação');
            // 0 indica que a finalização ocorreu sem erros
            process.exit(0);        
        });
    });
    
}