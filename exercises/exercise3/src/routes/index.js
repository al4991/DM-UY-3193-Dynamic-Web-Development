const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
    res.send('The index page also my name yeff')
});

module.exports = router; 