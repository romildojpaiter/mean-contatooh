var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');

module.exports = function() {
    
    var Usuario = mongoose.model('Usuario');
    
    passport.use( new GitHubStrategy({
        clientID: '4acc7e825ddd8a702b92',
        clientSecret: '17025195c304eb8957a2e5dc5245ee115dd6a693',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, 
    function(accessToken, refreshToken, profile, done) {
        
        // console.log('+ Profile: ' + JSON.stringify(profile));
        
        Usuario.findOrCreate(
            {"login" : profile.username},
            {"nome" : profile.displayName},
            function(erro, usuario) {
                if (erro) {
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario);
            }
        );
    }));
    
    passport.serializeUser(function(usuario, done){
        done(null, usuario._id);
    });
    
    passport.deserializeUser(function(id, done) {
        Usuario.findById(id).exec()
        .then(function(usuario) {
            done(null, usuario);
        });
    });
};