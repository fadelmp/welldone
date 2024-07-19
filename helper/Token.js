const jwt = require('jsonwebtoken');

const secretKey = 'welldone_12345678901234567890123';

class Token {

  // Function to generate a JWT token for a user
  async Generate(userId, userName, roleId, storeId) {
    
    // Payload to encode in the token
    const payload = {
      user_id: userId,
      username: userName,
      role_id: roleId,
      store_id: storeId
    };

    // Options for the token
    const options = {
      expiresIn: '30m' // Token will expire in 1 hour
    };

    // Generate the token
    const token = jwt.sign(payload, secretKey, options);

    return token
  }
}

module.exports = new Token()