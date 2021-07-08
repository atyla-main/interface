var _ = require('lodash');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var passportJWT = require('passport-jwt');
var createError = require('http-errors');
var http = require('http');
var enforce = require('express-sslify');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var api = require('./routes/api');
const usersController = require('./controllers').users;
const sessionsController = require('./controllers').sessions;
const ProcessCreate = require('./app/business/processes/create');
const ProcessShow = require('./app/business/processes/show');
const ProcessIndex = require('./app/business/processes/index');
const CollectionsValidation = require('./app/middleware/collections-validation');
const IdValidation = require('./app/middleware/id-validation');
const bcrypt = require('bcrypt');
var indexRouter = require('./routes/index');
require('dotenv').config();

var errorManager = require('./app/middleware/error-manager.js');

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var atylaJwt = require('./strategies/jwt-strategy.js');

const User = require('./models').User;

var app = express();
app.use(logger('dev'));

if ('production' === app.get('env')) {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
  });
}

var jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'maisonBleue';

var strategy = atylaJwt.jwtStrategy(jwtOptions);

passport.use(strategy);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.use(allowCrossDomain);

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

   if (attributes.email) {
     attributes.email = attributes.email.toLowerCase();
   }

	if (attributes.email && attributes.password) {
		var email = attributes.email;
		var password = attributes.password;
	}

  let blockedStages = ['inscription', 'confirmation_send', 'denied', 'unsubscribed'];
	var user = await User.findOne({ where: { email: email } });
	if (!user || blockedStages.includes(user.stage)) {
		res.status(401).json({
			message: 'Aucun utilisateur trouvé.'
		});
	}

	if (bcrypt.compareSync(password, user.password)) {
		var payload = { id: user.uuid };
		var token = jwt.sign(payload, jwtOptions.secretOrKey, { expiresIn: '120m' });
		res.json({ message: 'ok', id: user.uuid, token: token });
	} else {
		res.status(401).json({ message: 'Le mot de passe de correspond pas.' });
	}
});

app.post('/prospects', CollectionsValidation.validate, ProcessCreate.create);
app.get('/users/:userId', usersController.emailConfirmation);
app.post('/users', CollectionsValidation.validate, ProcessCreate.create);
app.post('/password_forgotten', sessionsController.passwordForgotten);
app.post('/reset_password', sessionsController.resetPassword);
app.get('/can_reset_password/:userId', sessionsController.canResetPassword);
app.get('/icos/:icoId', CollectionsValidation.validate, IdValidation.validate,  ProcessShow.show);
app.get('/icos', CollectionsValidation.validate, ProcessIndex.index);
app.use('/api',  function(req, res, next) {
  passport.authenticate('jwt', { session: false },
  function(err, user, info) {
    if (info && info.name === 'TokenExpiredError') info.status = 401;
    if (info && info.name === 'JsonWebTokenError') info.status = 401;
    if (info && info.name === 'Error') info.status = 401;
    if (err || !user) return res.status(401).send({
      errors: [{
        status: '401',
        source: { pointer: req.path },
        title: info.name || 'Unauthorized',
        detail: info.message || 'You do not have access to this path.'
      }]
    });

    req.user = user;
    next();
  })(req, res, next)
}, api);

app.use('/', indexRouter);


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  errorManager.global(err, req, res, next)
});

module.exports = app;
