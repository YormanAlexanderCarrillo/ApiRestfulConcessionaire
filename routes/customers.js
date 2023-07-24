const express = require('express')
const router = express.Router()
const {obtainAll, save, erase, update, findById} = require('../contollers/controll-customers')

router.get('/', obtainAll)
router.get('/:id', findById)
router.post('/', save)
router.delete('/:id', erase)
router.put('/:id', update)

module.exports = router