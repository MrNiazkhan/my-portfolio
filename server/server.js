const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  console.log('Contact form data:', req.body);
  res.json({ message: 'Message received!' });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
