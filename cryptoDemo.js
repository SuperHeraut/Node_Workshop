import crypto, { Cipher } from "crypto";

// const HASH = crypto.createHash("sha256");
// HASH.update("P455w0rd");
// console.log(HASH.digest("hex"));

// //randomise
// crypto.randomBytes(16, (err, buf) => {
// 	if (err) throw err;
// 	console.log(buf.toString("hex"));
// });

//create cipher & decipher

const ALGORISM = "aes-256-cbc";
const KEY = crypto.randomBytes(32);
const IV = crypto.randomBytes(16);

const CIPHER = crypto.createCipheriv(ALGORISM, KEY, IV);
let encrypted = CIPHER.update("message secret", "utf8", "hex");
encrypted += CIPHER.final("hex");
console.log(encrypted);

const DECIPHER = crypto.createDecipheriv(ALGORISM, KEY, IV);
let decrypted = DECIPHER.update(encrypted, "hex", "utf8");
decrypted += DECIPHER.final("utf8");
console.log(decrypted);