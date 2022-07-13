const Web3 = require('web3');
const web3 = new Web3("https://matic-mumbai.chainstacklabs.com");//与那个链连接就用那个的rpc

//私钥交易时用
// web3.eth.accounts.wallet.add({
//     address: '0xAe9eeC383961e7e43403Fd1FF8e60A2BeA62F843',
//     privateKey: '08d3df24a307666e7c0f94ae2eea1787c2db58cc58842577c2efb1991bb7fff7'
// });

//获取ETH最新高度
web3.eth.getBlockNumber()
.then(console.log);

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



