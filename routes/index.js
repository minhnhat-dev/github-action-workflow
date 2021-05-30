const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/ping', (req, res, next) => {
    res.status(200).send({ message: 'pong pong pong !!!' });
});

module.exports = router;
