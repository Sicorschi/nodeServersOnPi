const express = require('express');
const morgan = require('morgan');
const serverConfig = require('./serverConfig');
const avatarRoutes = require('./routes/avatar.routes');
const passRoutes = require('./routes/pass.routes');
const db = require('./database/db');
const cors = require('cors');

// INIT:
const app = express();

// SETTINGS:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('port', process.env.PORT || serverConfig.PORT);
app.use(morgan('dev'));
app.use(cors());

// ROUTES:
app.use('/api/avatar', avatarRoutes);
app.use('/api/pass', passRoutes);

// LISTENING:
app.listen(app.get('port'), () => {
  db.sync({ force: false }).then(() => {
    console.log('DB succesfully connected!!');
  }).catch(err => {
    console.log(`Error connecting the DB: ${err.message}`);
  });
  console.log('*************************');
  console.log(`Server is up and listening on port ${app.get('port')}`);
  console.log('*************************')
});