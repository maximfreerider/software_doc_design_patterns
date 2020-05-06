const express = require('express');
const accountRoute = require('./account.route');

const router = express.Router();

router.use('/account', accountRoute);

module.exports = router;