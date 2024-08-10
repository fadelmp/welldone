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

  // Method to regenerate a JWT token
  async Regenerate(token) {

    try {
      const payload = jwt.verify(token, secretKey)

      return this.Generate(
        payload.user_id, 
        payload.username, 
        payload.role_id, 
        payload.store_id, 
        payload.store_name
      )

    } catch (error) {
      // Error Handling
      throw new Error('Invalid token')
    }
  }

  async Validate(token) {

    let error = null
    jwt.verify(token, secretKey, (err, decoded) => { error = err })

    return (error == null) ? true : false
  }

  ReadUser(token) {

    const decoded = this.readToken(token)

    return (decoded !== "") ? decoded.user_id : ""

  }

  ReadUsername(token) {

    const decoded = this.readToken(token)

    return (decoded !== "") ? decoded.username : ""
  }

  ReadRole(token) {

    const decoded = this.readToken(token)

    return (decoded !== "") ? decoded.role_id : ""
  }

  ReadStore(token) {

    const decoded = this.readToken(token)

    return (decoded !== "") ? decoded.store_id : ""
  }

  ReadStoreName(token) {

    const decoded = this.readToken(token)

    return (decoded !== "") ? decoded.store_name : ""
  }

  readToken(token) {

    if (token === undefined || token === null || token === "")
      return ""

    return jwt.verify(token, secretKey)
  }
}

module.exports = new Token()