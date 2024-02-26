const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const routes = require('./routes');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
