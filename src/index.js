const express = require('express');
const morgan = require('morgan');
const serverConfig = require('./serverConfig');
const mainRoutes = require('./routes/main.routes');
const passRoutes = require('./routes/pass.routes');


// init the app object:
const app = express();

// configure the app object:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('port', process.env.PORT || serverConfig.PORT);
app.use(morgan('dev'));

// set the server routes:
app.use('/', mainRoutes);
app.use('/passs', passRoutes);

// turn on the server:
app.listen(app.get('port'), () => {
  console.log('*************************');
  console.log(`Server is up and listening on port ${app.get('port')}`);
  console.log('*************************')
});