const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

// parsed property show result reading .env file
console.log(dotenv.parsed);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`App is running on port ${PORT}`));
