const { check, validationResult } = require('express-validator')
const User = require('../../models/users')

exports.userValidators = [
  check('email')
    .isEmail()
    .custom((value, { req }) => {
      return new Promise((resolve, reject) => {
        User.findOne(function (err, name) {
          if (err) {
            reject(new Error('Server Error'))
          }
          if (!!user) {
            reject(new Error(`Already registered! Status: ${409}`))
          }
          resolve(true)

        })
      })
    }),
  check('password').isLength({ min: 1, max: 30 }),
  check('name').isLength({ min: 2, max: 100 }),
  check('birthDay').isDate().notEmpty(),
  check('pokemon').isString().notEmpty(),
  check('badges').isArray(),
  check('totalCoins').isFloat().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]