const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => res.send('name yeff'));
router.get('/me', (req, res) => res.send('my name not actually yeff tbh'));

module.exports = router; 