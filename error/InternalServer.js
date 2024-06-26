class InternalServer extends Error {

  constructor(message) {
    
    super(message)
    
    this.name = this.constructor.name
    this.statusCode = 500

    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = InternalServer