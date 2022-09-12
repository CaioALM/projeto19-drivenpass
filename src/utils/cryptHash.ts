import Cryptr from "cryptr";

function crypt(data: string){
    const cryptr = new Cryptr(process.env.CRYPTR || "new_secret");
    const encryptedData = cryptr.encrypt(data);
    return encryptedData;
}

function decrypt(data: string){
    const cryptr = new Cryptr(process.env.CRYPTR || "new_secret");
    const decryptedSecurityData: string = cryptr.decrypt(data);
    return decryptedSecurityData;
}

export {crypt, decrypt }