function ActivedUser(req) {
    
  return req.headers['username']
}

function RoleId(req) {

  return req.headers['role_id']
}

function UserId(req) {

  return req.headers['user_id']
}

function StoreId(req) {

  return req.headers['store_id']
}

module.exports = { 
  ActivedUser,
  RoleId,
  UserId,
  StoreId
}