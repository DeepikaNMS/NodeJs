const express = require('express');
const secretsRouter = require('./routes/secrets');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/secrets', secretsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});