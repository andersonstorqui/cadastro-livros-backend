const express = require('express')
const app = express()
const router = express.Router()
const clientControllers = require('../controllers/clientControllers')

router.get('/', clientControllers.readClient)
router.get('/:id', clientControllers.readOneClient)
router.post('/', clientControllers.createClient)
router.put('/:id', clientControllers.updateClient)
router.delete('/:id', clientControllers.deleteClient)

module.exports = router