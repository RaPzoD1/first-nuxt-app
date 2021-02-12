const express = require('express')
const app = express()

const router = express.Router()

router.use((req, res, next)=> {
    Object.setPrototypeOf(req, app.request)
    Object.setPrototypeOf(res, app.response)
    req.res = res
    res.req = req
    next()
})

router.get('/hello-world',(req, res) => {
    console.log('Hola mundo')
    res.status(200).json({
        message: 'Hola mundo todo bien'
    })
})

module.exports = {
    path: '/api',
    handler: router
}