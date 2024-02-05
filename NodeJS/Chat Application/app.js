const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); // Use cookie-parser middleware

// Include route files
const loginRoutes = require('./Routes/login');
const chatRoutes = require('./Routes/chat');

// Use routes
app.use('/login', loginRoutes);
app.use('/', chatRoutes);

app.listen(3000);
