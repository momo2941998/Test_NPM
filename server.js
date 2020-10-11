const express = require('express');
const dotenv = require('dotenv').config();
const machineUuid = require("machine-uuid");
const app = express();
app.use(express.json());

// parsed property show result reading .env file
console.log(dotenv.parsed);

app.get('/', (req, res) => {
    machineUuid().then(uuid => {
        res.json({uuid: uuid});

    })
})

app.use('/api/upload',require('./api/upload'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
