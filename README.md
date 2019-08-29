# Description
This is a source code of [justsmartcontracts.dev](https://justsmartcontracts.dev) backend (or API) part. 

The main website repository is [here](https://github.com/olekon/justsmartcontracts). Please refer it for information on what [justsmartcontracts.dev](https://justsmartcontracts.dev) is.


# Running locally
## Preparations
    npm install
Then create `apikeys.js` next to `package.json` and copy/paste following content there 

    module.exports = {
        infura: 'INFURA-API-KEY',
        etherscan: 'ETHERSCAN-API-KEY'
    }; 
and enter you Infura and Etherscan API keys in corresponding properties.

## Launch
    npm start

Application will be launched on http://localhost:3000. 