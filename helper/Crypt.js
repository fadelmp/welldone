const crypto = require('crypto');

class Crypt {

  async HashPass(password) {

    // Create a SHA-256 hash object
    const hash = crypto.createHash('sha256');
    
    // Hash the password and convert it to hexadecimal format
    const hashedPassword = hash.update(password).digest('hex');
    
    return hashedPassword;
  }
  
  // AES-256-CBC encryption function
  async EncryptPass(text, key) {

    const iv = crypto.randomBytes(16); // Initialization vector
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    
    return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
  }
  
  // AES-256-CBC decryption function
  async DecryptPass(text, key) {

    const parts = text.split(':');
    const iv = Buffer.from(parts.shift(), 'hex');
    const encryptedText = Buffer.from(parts.join(':'), 'hex');
    
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    
    return decrypted.toString();
  }
}

module.exports = new Crypt()