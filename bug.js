const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Not handling the error properly
      res.status(500).send('Error fetching user');
    } else {
      res.json(user);
    }
  });
});