const crypto = require('crypto');

function hashPassword(password) {

  // Create a SHA-256 hash object
  const hash = crypto.createHash('sha256');
  
  // Hash the password and convert it to hexadecimal format
  const hashedPassword = hash.update(password).digest('hex');
  
  return hashedPassword;
}

const crypto = require('crypto');

// AES-256-CBC encryption function
function encrypt(text, key) {
  const iv = crypto.randomBytes(16); // Initialization vector
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

// AES-256-CBC decryption function
function decrypt(text, key) {
  const parts = text.split(':');
  const iv = Buffer.from(parts.shift(), 'hex');
  const encryptedText = Buffer.from(parts.join(':'), 'hex');
  
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
  
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  
  return decrypted.toString();
}

// Example usage
const plainText = 'Hello, world!';
const encryptionKey = 'MyCustomEncryptionKey123';

// Encrypting the text
const encryptedText = encrypt(plainText, encryptionKey);
console.log('Encrypted:', encryptedText);

// Decrypting the text
const decryptedText = decrypt(encryptedText, encryptionKey);
console.log('Decrypted:', decryptedText);
