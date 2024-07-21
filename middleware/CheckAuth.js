const Token = require('../helper/Token')
const GetHeader = require('../helper/GetHeader')
const message = require('../message/Auth/AuthMessage')

const CheckAuth = async (req, res, next) => {

  let token = GetHeader.Token(req)
  if (!token)
    return res.status(401).json({ message: message.EMPTY_TOKEN })

  let validate = await Token.Validate(token)
  if (!validate)
    return res.status(401).json({ message: message.UNAUTHORIZED_ACCESS })

  next()
}

module.exports = CheckAuth