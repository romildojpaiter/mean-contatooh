module.exports = function(app) {
    
    app.get('/', function(req, res) {
        console.log('Presente na route index /');
        var login = '';
        if(req.user) {
            login = req.user.login;
        }
        console.log(login);
        res.render('index', { "usuarioLogado" : login });
    });
}