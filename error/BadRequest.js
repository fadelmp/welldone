class BadRequest extends Error {

  constructor(message) {
    
    super(message)
    
    this.name = this.constructor.name
    this.statusCode = 400

    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = BadRequest