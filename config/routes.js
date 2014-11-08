var Index = require('../app/controllers/index')
var User = require('../app/controllers/user')
var Movie = require('../app/controllers/movie')


module.exports = function(app) {
    app.use(function(req, res, next) {
        var _user = req.session.user

        app.locals.user = _user
        next()
    })

    app.get('/', Index.index)

    app.post('/user/signup', User.signup)
    app.post('/user/signin', User.signin)
    app.get('/logout', User.logout)
    app.get('/admin/userlist', User.list)


    //detail page
    app.get('/movie/:id', Movie.detail)
    app.get('/admin/new', Movie.new)
    app.get('/admin/update/:id', Movie.update)
    app.post('/admin/movie', Movie.save)

    app.get('/admin/list', Movie.list)

    // list delete movie
    app.delete('/admin/list', Movie.del)
}