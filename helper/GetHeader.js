const Token = require('./Token')

function Token(req) {

  return req.headers['x-welldone-authorization']
}

function UserId(req) {

  const token = req.headers['x-welldone-authorization']

  return Token.ReadUser(token)
}

function Username(req) {
    
  const token = req.headers['x-welldone-authorization']

  return Token.ReadUsername(token)
}

function RoleId(req) {

  const token = req.headers['x-welldone-authorization']

  return Token.ReadRole(token)
}

function StoreId(req) {

  const token = req.headers['x-welldone-authorization']

  return Token.ReadStore(token)
}

function StoreName(req) {

  const token = req.headers['x-welldone-authorization']

  return Token.ReadStoreName(token)
}

function Uri(req) {

  return req.originalUrl
}

module.exports = { 
  Token,
  Username,
  RoleId,
  UserId,
  StoreId,
  StoreName,
  Uri
}