require('dotenv').config();
const express = require('express');
const app = express();

require('./config/session')(app);
require('./config/parser')(app);
require('./config/views')(app);

require('./routes/start.route')(app);
require('./routes/1.route')(app);
require('./routes/3.route')(app);
require('./routes/4.route')(app);
require('./routes/6.route')(app);
require('./routes/7.route')(app);
require('./routes/8.route')(app);
require('./routes/9.route')(app);
require('./routes/10.route')(app);
require('./routes/12.route')(app);
require('./routes/13.route')(app);
require('./routes/14.route')(app);
require('./routes/15.route')(app);
require('./routes/18.route')(app);
require('./routes/20.route')(app);
require('./routes/21.route')(app);
require('./routes/22.route')(app);
require('./routes/23.route')(app);
require('./routes/end.route')(app);

require('./server/server')(app);