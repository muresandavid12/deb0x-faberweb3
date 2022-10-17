# deb0x
Decentralized Private Mail App and Protocol

### Prerequisites
* npm 6.14+
* node v14.17+
* [Metamask.io](https://metamask.io) browser extension
* Get goerli testnet ETH from a faucet (e.g. https://goerlifaucet.com/)

### Steps to run the frontend

1. `npm install` in root dir
2. `cd interface` and then `npm install`
3. `npm start`
4. open http://localhost:3000/

For a quick overview and explanations, see the demo video: https://youtu.be/8coLe-z6jHg 

Try out the deployed app: https://demo.deb0x.org/

### To redeploy the contracts
_The contracts for the hackathon version are already deployed and the frontend is linked to it. You only need to do the below steps if you want to change the functionality!_

Add `.secrets.json` file in root directory and put your secret phrase as a json format. For example:
```
{
    "mnemonic":"crazy crazy crazy crazy crazy crazy crazy crazy crazy crazy crazy buzz"
}
```

Run deploy script (Goerli testnet)
```
npx hardhat run --network goerli scritps/deploy.js
```

# Deb0x Contract Addresses 

| Contract name            | Commit hash | Goerli Testnet                                 | Mainnet                                |
| ------------------------ | ----------- | ------------------------------------------- | ------------------------------------------ | 
| Deb0xERC20               |  -          | 0x7c8B0C62c2cB8BEd8A60555D14722ACFf4D760e5 |  |
| Deb0x                    |  -          | 0x61D7bd5024F2AcaadD2eb8a898fa22DA7c6Fa5Aa  |  |

