const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <input type="text" name="username" placeholder="Enter your username">
      <button type="submit">Login</button>
    </form>
  `);
});

router.post('/', (req, res) => {
  const username = req.body.username;

  // Store username in browser's local storage
  res.setHeader('Set-Cookie', `username=${username}; Path=/`);

  // Redirect to chat page
  res.redirect('/');
});

module.exports = router;
