const express = require('express');
const router = express.Router();
const searchontroller = require('../Controllers/searchControllers');

// router.get('/api/clima/gravar', 'Rota deu certo')

router.get('/api/clima/historico',searchontroller.historico )
router.post('/api/clima/gravar',searchontroller.gravar )

module.exports = router