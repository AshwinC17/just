const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res) => {
    res.send(`
      <form action="/product" method="POST">
        <input type="text" name="productName" placeholder="Product Name">
        <input type="text" name="productSize" placeholder="Product Size">
        <button type="submit">Add Product</button>
      </form>
    `);
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/'); 
});

module.exports = router;