
export class Response {

  async Success(message, data) {
    
    return {
      Message: message,
      Data: data
    }
  }

  async Failed(message) {

    return { Message: message}
  }
}