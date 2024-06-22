function GetActivedUser(req) {
    
  return req.headers['username']
}

module.exports = GetActivedUser