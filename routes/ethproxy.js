/**
 * Router - proxy that forwards requests to Infura nodes
 */
 
const express = require('express');
const proxy = require('express-http-proxy');
const config = require('../config');
const router = express.Router();

router.use('/main', proxy(config.nodes.mainnet));
router.use('/rop', proxy(config.nodes.ropsten));
router.use('/rin', proxy(config.nodes.rinkeby));

module.exports = router;