var _ = require('lodash');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var passportJWT = require('passport-jwt');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var api = require('./routes/api');

var indexRouter = require('./routes/index');

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var atylaJwt = require('./strategies/jwt-strategy.js');

//model for auth
const User = require('./models').User;

var app = express();
app.use(logger('dev'));

var jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'maisonBleue';

var strategy = atylaJwt.jwtStrategy(jwtOptions);

passport.use(strategy);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', async function(req, res) {
	if (!req.body.data) {
		return res.status(401).json({
			message: 'No data found'
		});
	}

	const attributes = req.body.data.attributes;
	if (attributes.email && attributes.password) {
		var email = attributes.email;
		var password = attributes.password;
	}

	var user = await User.findOne({ where: { email: email } });
	if (!user) {
		res.status(401).json({
			message: 'No such user found'
		});
	}

	if (user.password == password) {
		var payload = { id: user.id };
		var token = jwt.sign(payload, jwtOptions.secretOrKey, { expiresIn: '60m' });
		res.json({ message: 'ok', token: token });
	} else {
		res.status(401).json({ message: 'passwords did not match' });
	}
});

app.use('/api', passport.authenticate('jwt', { session: false }), api);
app.use('/', indexRouter);

// catch 404 and forward to error handler
if ('development' === app.get('env')) {
  app.use(function(req, res, next) {
	  next(createError(404));
  });


  // error handler
  app.use(function(err, req, res, next) {
	  // set locals, only providing error in development
	  res.locals.message = err.message;
	  res.locals.error = req.app.get('env') === 'development' ? err : {};

	  // render the error page
	  res.status(err.status || 500);
	  res.render('error');
  });
}

module.exports = app;
