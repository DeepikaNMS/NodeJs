const express = require('express');
const router = express.Router();

router.get('/secrets', (req, res) => {
    console.log(`Request received from IP: ${req.ip}`);
    res.send('This is a secret message!');
});

module.exports = router;