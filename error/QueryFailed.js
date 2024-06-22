class QueryFailed extends Error {

  constructor(error, message) {
    
    super(message)
    
    this.name = this.constructor.name
    this.statusCode = 500

    console.log(error)

    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = QueryFailed