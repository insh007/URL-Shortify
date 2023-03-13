const express = require('express')
const router = express.Router()
const urlController = require('../controllers/createUrl')

/*---------------------------To Create shorten Url----------------------------------*/
router.post('/url/shorten', urlController.createUrl)

/*---------------------------To fetch data----------------------------------*/
router.get(('/:urlCode'), urlController.getUrl)

module.exports = router