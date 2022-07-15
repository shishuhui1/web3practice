
// const contractApi =require('./ERC20-ABI.json')

var Web3 = require('web3');

const web3 = new Web3("https://polygontestapi.terminet.io/rpc");//与那个链连接就用那个的rpc
// var privateKey = Buffer.from('08d3df24a307666e7c0f94ae2eea1787c2db58cc58842577c2efb1991bb7fff7', 'hex');
// var MyContract= new web3.eth.Contract(contractApi,'0xF34e58e99BcB1DC8eB529AfEC5e1cDA87DE82e2F')
// 私钥交易时用                                     
web3.eth.accounts.wallet.add({
    address: '0xAe9eeC383961e7e43403Fd1FF8e60A2BeA62F843',
    privateKey: '08d3df24a307666e7c0f94ae2eea1787c2db58cc58842577c2efb1991bb7fff7'
});

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
var transferFormObj = {
    from:'0xAe9eeC383961e7e43403Fd1FF8e60A2BeA62F843',
        to:'0xE0431Bad1E697D212246f24b55bc52A27b330b56',
        value:web3.utils.toWei('0','ether'),
        data:'',
        gasLimit:22000
    }
weth_contract =new web3.eth.Contract(ERC20_aci,'0xf6B011A5D9edb658001bF825164554A96Eac1c56')
//读取合约内的Token名称、符号、总供应量和精度数值
weth_contract.methods.name().call({from:'0xAe9eeC383961e7e43403Fd1FF8e60A2BeA62F843'}).then(console.log)
weth_contract.methods.symbol().call().then(console.log)
var decimals= weth_contract.methods.decimals().call().then(console.log)
weth_contract.methods.totalSupply().call()/ 10*decimals.then(console.log)
//某个用户名下的Token数量
var balanceOfValue= weth_contract.methods.balanceOf('0xAe9eeC383961e7e43403Fd1FF8e60A2BeA62F843').call().then(console.log)
//转ERC20的Token到指定地址
weth_contract.methods.transferFrom('0xAe9eeC383961e7e43403Fd1FF8e60A2BeA62F843','0xE0431Bad1E697D212246f24b55bc52A27b330b56',balanceOfValue).call().then(console.log)
//获取并解析区块中的事件
weth_contract.methods.Transfer('0xAe9eeC383961e7e43403Fd1FF8e60A2BeA62F843','0xE0431Bad1E697D212246f24b55bc52A27b330b56',balanceOfValue).call().then(console.log)