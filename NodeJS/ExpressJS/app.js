const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res) => {
    res.send(`
      <form action="/add-product" method="POST">
        <input type="text" name="productName" placeholder="Product Name">
        <input type="text" name="productSize" placeholder="Product Size">
        <button type="submit">Add Product</button>
      </form>
    `);
  });

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/'); 
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);