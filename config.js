const apikeys = require('./apikeys');

module.exports = {
    baseUrl: '/',

    nodes: {        
        mainnet: 'https://mainnet.infura.io/v3/' + apikeys.infura,
        ropsten: 'https://ropsten.infura.io/v3/' + apikeys.infura,
        rinkeby: 'https://rinkeby.infura.io/v3/' + apikeys.infura
    }
}