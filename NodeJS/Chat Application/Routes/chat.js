const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  const username = req.cookies.username;

  if (!username) {
    return res.redirect('/login');
  }

  // Read existing messages from file or initialize an empty object
  let messages = {};
  try {
    const data = fs.readFileSync('messages.json', 'utf-8');
    messages = JSON.parse(data);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      // Handle other errors, not just file not found (ENOENT)
      console.error('Error reading messages file:', error.message);
    }
  }

  // Display messages
  const messageList = Object.entries(messages)
    .map(([sender, message]) => `<p><strong>${sender}:</strong> ${message}</p>`)
    .join('');

  const chatForm = `
    <form action="/send-message" method="POST">
      <input type="text" name="message" placeholder="Type your message">
      <button type="submit">Send</button>
    </form>
  `;

  const chatPage = `${messageList}${chatForm}`;

  res.send(chatPage);
});

router.post('/send-message', (req, res) => {
  const username = req.cookies.username;
  const message = req.body.message;

  // Read existing messages from file or initialize an empty object
  let messages = {};
  try {
    const data = fs.readFileSync('messages.json', 'utf-8');
    messages = JSON.parse(data);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      // Handle other errors, not just file not found (ENOENT)
      console.error('Error reading messages file:', error.message);
    }
  }

  // Store new message
  messages[username] = message;

  // Write messages back to file
  try {
    fs.writeFileSync('messages.json', JSON.stringify(messages));
  } catch (error) {
    console.error('Error writing messages file:', error.message);
  }

  // Redirect to chat page
  res.redirect('/');
});

module.exports = router;
