/* eslint-disable no-console */
import express from 'express'

const router = express.Router()

const TOKEN = 's6jRHbZmiAT0f8DXDTGJ4VEicO_5XCxEDQ6ezLPYpgk1ismu'

router.post('/', verifyToken, (req, res) => {
  console.log(' --- res body -- ', req.body)
  res.send('Webhook Received')
});

function verifyToken(req, res, next) {
  const token = req.headers.authorization

  if (token === TOKEN) {
    console.log('---- pass authen')
    next();
  } else {
    // Forbidden
    console.log('---- faild authen', req.headers)
    res.sendStatus(403)
  }
}


module.exports = router