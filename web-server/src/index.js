const express = require('express');
const dotenv = require('dotenv');
const customerRoutes = require('./routes/customerRoutes');

dotenv.config();

const app = express();
const port = 3000;

app.use('/aaa', customerRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
