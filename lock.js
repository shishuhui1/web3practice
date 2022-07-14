
// const contractApi =require('./ERC20-ABI.json')

var Web3 = require('web3');

const web3 = new Web3("https://polygontestapi.terminet.io/rpc");//与那个链连接就用那个的rpc
// var privateKey = Buffer.from('08d3df24a307666e7c0f94ae2eea1787c2db58cc58842577c2efb1991bb7fff7', 'hex');
// var MyContract= new web3.eth.Contract(contractApi,'0xF34e58e99BcB1DC8eB529AfEC5e1cDA87DE82e2F')
// 私钥交易时用                                     
// web3.eth.accounts.wallet.add({
//     address: '0xAe9eeC383961e7e43403Fd1FF8e60A2BeA62F843',
//     privateKey: '08d3df24a307666e7c0f94ae2eea1787c2db58cc58842577c2efb1991bb7fff7'
// });

ERC20_aci=[
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
]

//获取ETH最新高度
// web3.eth.getBlockNumber()
// .then(console.log);

// 获取指定高度的区块数据，交易哈希的列表
// web3.eth.getBlock(27137091,true)
// .then(console.log)

// 获取指定高度交易哈希的列表
// web3.eth.getTransactionFromBlock(5115).then(console.log)

//向以太坊网络提供一个交易
// const transactionbject={
//     from:'0xAe9eeC383961e7e43403Fd1FF8e60A2BeA62F843',
//     to:'0xF34e58e99BcB1DC8eB529AfEC5e1cDA87DE82e2F',
//     value:web3.utils.toWei('0','ether'),
//     data:'',
//     gasLimit:22000
// }
// web3.eth.sendTransaction(transactionbject).then(console.log)

//获取指定交易哈希的交易数据
// const transactionHash='0x2e3dc850dcfc0745050386a5cc26db10f559c23ea239549b03b4e695214add5b'//交易后的hash值
// web3.eth.getTransaction(transactionHash).then(console.log)

//通过sendSignedTransaction发送交易-
// var rawTx = {
//     nonce: '0x00',
//     gasPrice: '0x09184e72a000',
//     gasLimit: '0x2710',
//     to: '0xF34e58e99BcB1DC8eB529AfEC5e1cDA87DE82e2F',
//     value: '0x00',
//     data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
// }
// var tx = new Tx(rawTx);
// tx.sign(privateKey);
// var serializedTx = tx.serialize();
// console.log(serializedTx.toString('hex'));
// web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
// .on('receipt', console.log);

// 生成ERC20的合约对象

weth_contract =new web3.eth.ontract('0xF34e58e99BcB1DC8eB529AfEC5e1cDA87DE82e2F', abi=ERC20_aci)
//读取合约内的Token名称
weth_contract.function.name().call().then(console.log)
//读取合约内的Token符号
weth_contract.functions.symbol().call().then(console.log) / 10**decimals
//读取合约内的总供应量
 weth_contract.functions.totalSupply().call().then(console.log) / 10**decimals
 //读取合约内的精度数值
 weth_contract.functions.decimals().call().then(console.log) / 10**decimals
 //某个账户下的Token数量
 weth_contract.functions.balanceOf('0xF34e58e99BcB1DC8eB529AfEC5e1cDA87DE82e2F').call().then(console.log)


// MyContract.methods.name().call().then(console.log)


