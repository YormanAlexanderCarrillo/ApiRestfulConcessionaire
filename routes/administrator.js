const express = require ('express')
const router = express.Router()

const {obtainAll, findById, save, erase, update} = require('../contollers/controll-administrator.js')

router.get('/', obtainAll)
router.get('/:id', findById)
router.post('/', save)
router.delete('/:id', erase)
router.put('/:id', update)

module.exports = router
