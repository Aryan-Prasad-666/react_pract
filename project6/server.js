import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

const USER = {
  username: 'aryan',
  password: '1234',
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});
