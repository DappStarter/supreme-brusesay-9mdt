require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note mean exchange inflict clog success viable'; 
let testAccounts = [
"0x20925347ddf521d184000a4d75c06c61f83304d5179a76178da6cd9c3e4d3631",
"0xdf42df197f2547c3cbf9b5a31174b3987cd05cd8c1d5318178a9d12b14d74cfc",
"0x77bfc722c953a8f3a6cf105549256461821b474361e9981eab12b10529b0b64e",
"0x2dad0233d6f831a3a0e34337ef70c0393b3fff87e771251838a02d105708b433",
"0x7cbbd1f3109bf643cb7995a2bb35074e780267a1493c3d12a9293068641bb486",
"0xb12524068f86a90523c2e817d806eab88c9d17f60f19428580de2c4c037ee2cc",
"0x0894efd170dcfc689ebf2fbe3c8d0e85f43ec4bd9cc56be590404cfa1b619af7",
"0x58de0aa7c2e8456880604725037e71382bd2eae43c5abdc5ffcfc97a455f2336",
"0xff78bebb6f4b0ab65ff72ab183ad3576158a6f716e9e5f23bf5dfb9ed4e0b6c9",
"0x400aa1af6600ffa8726070718c4102cd253c4192112534f4b2eaf56be3b31e6e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

