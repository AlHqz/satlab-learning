import { sha256 } from 'js-sha256';
//Calclates real hashes for the genesis block
const calculateRealBitcoinHashes = (nonce: number) => {
    //Actual genesis block header hardcoded values
    const version = "1";
    const prevHash = "0000000000000000000000000000000000000000000000000000000000000000";
    const merkleRoot = "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b";
    const timestamp = "1231006505";
    const bits = "1d00ffff";
    //Structure for the header string
    const headerString = `${version}${prevHash}${merkleRoot}${timestamp}${bits}${nonce}`;
    //First Hash
    const firstHashHex = sha256(headerString);
    //Final Hash
    const finalHashHex = sha256(firstHashHex);
    return {
        firstHash: firstHashHex,
        finalHash: finalHashHex
    };
};
//Worker's hook
self.onmessage = (e: MessageEvent<{ nonce: number }>) => {
    const result = calculateRealBitcoinHashes(e.data.nonce);
    self.postMessage(result);
};