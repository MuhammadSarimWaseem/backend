const cors = require('cors');
const express = require('express');
const path = require('path');
const userModel = require('./models/user');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: 'false' }));
app.use(bodyParser.json());

app.post('/enterdata', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await userModel.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user', details: error.message });
  }
});

app.get('/getData', async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data', details: error.message });
  }
});

app.listen(PORT, () => { console.log("Server running on port", PORT); });
