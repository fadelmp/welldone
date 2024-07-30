const Token = require('./Token')

function UserId(req) {

  const token = getToken(req)

  return Token.ReadUser(token)
}

function Username(req) {
    
  const token = getToken(req)

  return Token.ReadUsername(token)
}

function RoleId(req) {

  const token = getToken(req)

  return Token.ReadRole(token)
}

function StoreId(req) {

  const token = getToken(req)

  return Token.ReadStore(token)
}

function StoreName(req) {

  const token = getToken(req)

  return Token.ReadStoreName(token)
}

function Uri(req) {

  return req.originalUrl
}

function getToken(req) {

  return req.headers['x-welldone-authorization']
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