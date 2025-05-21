// Commit: https://github.com/charliewilco/downwrite/commit/f2ff53a39f2532a43785c647a86ba02848527197#diff-69fe462a044fa08a0d897fe61b39ee6ad0ba532dad554e0f9e5f6114d7849e8dL3
// Model: .227
const jwt = require('jsonwebtoken')

const verifyJWT = token =>
  new Promise(resolve =>
    resolve(jwt.verify(token, 'b2d45bbb-4277-4397-b8d2-a6c67a8003f5'))
  )

const isNotLoggedIn = async (req, res, next) => {
  const token = req.universalCookies.get('DW_TOKEN')
  if (token) {
    const { user } = await verifyJWT(token)
    return user && next()
  }
  return res.redirect('/login')
}
module.exports = { verifyJWT, isNotLoggedIn }
