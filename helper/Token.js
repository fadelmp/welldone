const jwt = require('jsonwebtoken');

const secretKey = 'welldone_12345678901234567890123';

class Token {

  // Function to generate a JWT token for a user
  async Generate(userId, userName, roleId, storeId, storeName) {
    
    // Payload to encode in the token
    const payload = {
      user_id: userId,
      username: userName,
      role_id: roleId,
      store_id: storeId,
      store_name: storeName
    };

    // Options for the token
    const options = {
      expiresIn: '30m' // Token will expire in 1 hour
    };

    // Generate the token
    const token = jwt.sign(payload, secretKey, options);

    return token
  }

  async Validate(token) {

    let error = null
    jwt.verify(token, secretKey, (err, decoded) => { error = err })

    return (error == null) ? true : false
  }

  async ReadToken(token) {

    if (token === undefined || token === null || token === "")
      return ""

    return jwt.verify(token, secretKey)
  }

  async ReadUser(token) {

    const decoded = await ReadToken(token)

    return (decoded !== "") ? decoded.user_id : ""

  }

  async ReadUsername(token) {

    const decoded = await ReadToken(token)

    return (decoded !== "") ? decoded.username : ""
  }

  async ReadRole(token) {

    const decoded = await ReadToken(token)

    return (decoded !== "") ? decoded.role_id : ""
  }

  async ReadStore(token) {

    const decoded = await ReadToken(token)

    return (decoded !== "") ? decoded.store_id : ""
  }

  async ReadStoreName(token) {

    const decoded = await ReadToken(token)

    return (decoded !== "") ? decoded.store_name : ""
  }
}

module.exports = new Token()