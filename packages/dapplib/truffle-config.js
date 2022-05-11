require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace indoor sure security trap cruise ridge toss give knife forget section'; 
let testAccounts = [
"0x441fcb01f8294f59f411b5146907c97b090f76572ffef80018e6f3f07e2f5e35",
"0xf7245378e0e127f609c9f67c4b2733b8cd9666302000764801c539a8ae11a65a",
"0x597694215e26df4d50eb9e994038fd9f4a00378fd727abe8d5d8cf42a7a72af1",
"0x7178df5b2843ef8eb03673eaaef8d755b1976fff594794f1ec3549125ebd7918",
"0xd61f55b321b38b0ceed4534759d6c2b39c79c731d82616a73f8acfda82b8460d",
"0x880d74a8cf3beda58cf468443660ea81516f321a969f2690c88af595c9cfd742",
"0x7b442b7b671aab2185d459078e94652e2db7bf1987cd06d21dc38fc80feac265",
"0x48ec17af6f14d7abc0e4b67d92804aa64752396446c108946e48960a43e62b17",
"0xc814b6abd63fde443930137aae1fbea1b6aee56514e4394125d77df3f8caf7de",
"0xa8412e0673b714aad4de4a097578c0124843e9594eebafeb3012ac28e7a4bde9"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


