'use strict';

var ethers = require('ethers');
var require$$0 = require('defender-relay-client/lib/ethers');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ethers__default = /*#__PURE__*/_interopDefaultLegacy(ethers);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

const ForwarderAbi$1 = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "domainSeparator",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "domainValue",
                "type": "bytes"
            }
        ],
        "name": "DomainRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "typeHash",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "typeStr",
                "type": "string"
            }
        ],
        "name": "RequestTypeRegistered",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "EIP712_DOMAIN_TYPE",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "GENERIC_PARAMS",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "gas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nonce",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint256",
                        "name": "validUntilTime",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct IForwarder.ForwardRequest",
                "name": "req",
                "type": "tuple"
            },
            {
                "internalType": "bytes32",
                "name": "requestTypeHash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "suffixData",
                "type": "bytes"
            }
        ],
        "name": "_getEncoded",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "domains",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "gas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nonce",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint256",
                        "name": "validUntilTime",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct IForwarder.ForwardRequest",
                "name": "req",
                "type": "tuple"
            },
            {
                "internalType": "bytes32",
                "name": "domainSeparator",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "requestTypeHash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "suffixData",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "sig",
                "type": "bytes"
            }
        ],
        "name": "execute",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            },
            {
                "internalType": "bytes",
                "name": "ret",
                "type": "bytes"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            }
        ],
        "name": "getNonce",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "version",
                "type": "string"
            }
        ],
        "name": "registerDomainSeparator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "typeName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "typeSuffix",
                "type": "string"
            }
        ],
        "name": "registerRequestType",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "typeHashes",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "gas",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nonce",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint256",
                        "name": "validUntilTime",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct IForwarder.ForwardRequest",
                "name": "req",
                "type": "tuple"
            },
            {
                "internalType": "bytes32",
                "name": "domainSeparator",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "requestTypeHash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "suffixData",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "sig",
                "type": "bytes"
            }
        ],
        "name": "verify",
        "outputs": [],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];

var forwarder = {
    ForwarderAbi: ForwarderAbi$1
};

var Deb0x="0x80F98b549B723a089fa5eb159Dcc537FD6656d20";var Forwarder="0x9C04AfAcE0bff581aab06f727b2Ed666b755fB08";var require$$2 = {Deb0x:Deb0x,Forwarder:Forwarder};

const { DefenderRelaySigner, DefenderRelayProvider } = require$$0__default["default"];

const { ForwarderAbi } = forwarder;
const ForwarderAddress = require$$2.Forwarder;

async function relay(forwarder, typeHash, domainSeparator, request, signature, whitelist) {
  // Decide if we want to relay this request based on a whitelist
  const accepts = !whitelist || whitelist.includes(request.to);
  if (!accepts) throw new Error(`Rejected request to ${request.to}`);

  console.log("validating");
  // Validate request on the forwarder contract
  const valid = await forwarder.verify(request, domainSeparator, typeHash, '0x', signature);
  if (!valid) throw new Error(`Invalid request`);
  console.log("valid!");

  // Send meta-tx through relayer to the forwarder contract
  const gasLimit = (parseInt(request.gas) + 2000000).toString();
  const value = ethers__default["default"].BigNumber.from("1000000000000000000");
  return await forwarder.execute(request, domainSeparator, typeHash, '0x', signature, { gasLimit, value });
}

async function handler(event) {
  // Parse webhook payload
  if (!event.request || !event.request.body) throw new Error(`Missing payload`);
  const {typeHash, domainSeparator, signature, request } = event.request.body;
  console.log(`Relaying`, request);
  
  // Initialize Relayer provider and signer, and forwarder contract
  const credentials = { ... event };
  const provider = new DefenderRelayProvider(credentials);
  const signer = new DefenderRelaySigner(credentials, provider, { speed: 'fast' });
  const forwarder = new ethers__default["default"].Contract(ForwarderAddress, ForwarderAbi, signer);
  
  // Relay transaction!
  const tx = await relay(forwarder, typeHash, domainSeparator, request, signature);
  console.log(`Sent meta-tx: ${tx.hash}`);
  return { txHash: tx.hash };
}

var relay_1 = {
  handler,
  relay,
};

module.exports = relay_1;
