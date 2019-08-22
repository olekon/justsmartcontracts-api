/**
 * Router - proxy that forwards requests to Infura nodes
 */
 
const express = require('express');
const proxy = require('express-http-proxy');
const config = require('../config');
const router = express.Router();

router.use('/mainnet', proxy(config.nodes.mainnet));
router.use('/ropsten', proxy(config.nodes.ropsten));
router.use('/rinkeby', proxy(config.nodes.rinkeby));
router.use('/kovan', proxy(config.nodes.kovan));
router.use('/goerli', proxy(config.nodes.goerli));

module.exports = router;