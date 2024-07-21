const GetHeader = require('../helper/GetHeader')
const message = require('../message/Auth/AuthMessage')
const comparator = require('../comparator/Auth/AuthComparator')

const CheckRole = async (req, res, next) => {

  let uri = GetHeader.Uri(req)
  let roleId = GetHeader.RoleId(req)

  let hasAccess = await comparator.CheckAccess(roleId, uri)
  if (!hasAccess)
    return res.status(403).json({ message: message.FORBIDDEN_ACCESS })

  next()
}

module.exports = CheckRole