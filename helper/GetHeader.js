function Token(req) {

  return req.headers['x-welldone-authorization']
}

function Username(req) {
    
  return req.headers['x-welldone-username']
}

function RoleId(req) {

  return req.headers['x-welldone-role']
}

function UserId(req) {

  return req.headers['x-welldone-user']
}

function StoreId(req) {

  return req.headers['x-welldone-store']
}

function StoreName(req) {

  return req.headers['x-welldone-store-name']
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