const express = require('express');
const accountRoute = require('./account.route');
const cityDataRoute = require('./eventHub.route')

const router = express.Router();

router.use('/account', accountRoute);
router.use('/city_data', cityDataRoute);

module.exports = router;
