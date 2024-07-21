class Forbidden extends Error {

  constructor(message) {
    
    super(message)
    
    this.name = this.constructor.name
    this.statusCode = 403

    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = Forbidden