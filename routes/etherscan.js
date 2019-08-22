/**
 * Router for etherscan api requests.
 * Receives requests in form /APIMETHOD/NETWORK/[parameters].
 * NETWORK is one of mainnet/ropsten/rinkeby/kovan/goerli
 */

const express = require('express');
const config = require('../config');
const apikeys = require('../apikeys');
const request = require('request-promise-native');

const router = express.Router();

const getEtherscanApiAddress = (network) => `https://${config.etherscanAPI[network]}.etherscan.io/api`;

router.get('/abi/:network/:address', function (req, res) {
    request({
        url: getEtherscanApiAddress(req.params.network),
        qs: {
            module: 'contract',
            action: 'getabi',
            address: req.params.address,
            apikeyy: apikeys.etherscan
        }
    }).
        then(response => {
            res.json(JSON.parse(response));
        }).
        catch(e => {
            res.json({status: 0, message: e.message});
        });
});
module.exports = router;