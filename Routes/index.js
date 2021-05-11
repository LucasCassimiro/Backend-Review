const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth, (req,res) => {
    console.log(res.locals.auth_data);
   return res.send({message: 'Essa informação é muito importante, usuários não autorizados não deveriam recebe-lá!'}); 
});

router.post('/', (req,res) => {
    return res.send({message: 'Tudo ok com o metodo POST da raiz!'});
});

module.exports = router;