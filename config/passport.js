var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
    
    var Usuario = mongoose.model('Usuario');
    
    passport.use( new GitHubStrategy({
        clientID: '4acc7e825ddd8a702b92',
        clientSecret: '17025195c304eb8957a2e5dc5245ee115dd6a693',
        callbackURL: 'http://localhost:3000'
    }, 
    function(accessToken, refreshToken, profile, done) {
        Usuario.findOrCreate(
            {"login" : profile.username},
            {"nome" : profile.username},
            function(erro, usuario) {
                if (erro) {
                    console.log(erro);
                    retun done(erro);
                }
                retun done(null, usuario);
            }
        );
    }));
}