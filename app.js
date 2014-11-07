var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var mongoStore = require('connect-mongo')(express)
var bodyParser = require('body-parser')

var port = process.env.PORT || 3000
var app = express()

var dbUrl = 'mongodb://localhost/imooc'
mongoose.connect(dbUrl)

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(bodyParser())
app.use(express.cookieParser())
app.use(express.session({
    secret: 'imooc',
    store: new mongoStore({
        url: dbUrl,
        collection: 'sessions'
    })
}))

require('./config/routes')(app)

app.listen(port)
app.use(express.static(path.join(__dirname, 'public')))
app.locals.moment = require('moment')