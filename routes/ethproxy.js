/**
 * Router - proxy that forwards requests to Infura nodes
 */
 
const express = require('express');
const proxy = require('express-http-proxy');
const config = require('../config');
const router = express.Router();
const apiKeys = require('../apikeys.js');

const proxyReqPathResolver = req => {
    return `/v3/${apiKeys.infura}`;
}

router.use('/mainnet', proxy(config.nodes.mainnet, {proxyReqPathResolver}));
router.use('/ropsten', proxy(config.nodes.ropsten, {proxyReqPathResolver}));
router.use('/rinkeby', proxy(config.nodes.rinkeby, {proxyReqPathResolver}));
router.use('/kovan', proxy(config.nodes.kovan, {proxyReqPathResolver}));
router.use('/goerli', proxy(config.nodes.goerli, {proxyReqPathResolver}));

module.exports = router;