const apikeys = require('./apikeys');

const getInfuraApiEndpoint = (subdomain) => `https://${subdomain}.infura.io/v3/${apikeys.infura}`;

module.exports = {
    baseUrl: '/',

    nodes: {        
        mainnet: getInfuraApiEndpoint('mainnet'),
        ropsten: getInfuraApiEndpoint('ropsten'),
        rinkeby: getInfuraApiEndpoint('rinkeby'),
        kovan: getInfuraApiEndpoint('kovan'),
        goerli: getInfuraApiEndpoint('goerli')
    },

    etherscanAPI: {
        mainnet: 'api',
        ropsten: 'api-ropsten',
        rinkeby: 'api-rinkeby',
        kovan: 'api-kovan',
        goerli: 'api-goerli',
    }
}