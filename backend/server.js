const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const chatRoutes = require('./src/routes/chatRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ 
        message: 'Welcome to Personal Assistant API 🚀' 
    });
});

app.listen(PORT, () => {
  console.log(`🚀 Personal Assistant Server is running on port ${PORT}`);
});