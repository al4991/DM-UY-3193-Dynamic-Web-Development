const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => res.send('My path is: "./about"'));
router.get('/me', (req, res) => res.send('My path is "./about/me"'));

module.exports = router; 