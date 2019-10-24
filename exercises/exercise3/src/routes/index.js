const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
    res.send('This is the initial page that will be loaded! path="./"');
});

module.exports = router; 