const {Router} = require('express');
const router = Router();
const Usuario = require('../models/Usuario');

router.post('/', async function(req, res){
    try {
        console.log('Objeto recibido',req.body);
        
        const existeusuario = await Usuario.findOne({email: req.body.email});
        console.log('existe usuario', existeusuario);
        if (existeusuario){
                return res.send('email ya existe');
            }
        let usuario = new Usuario();
        usuario.nombre = req.body.nombre;
        usuario.email = req.body.email;
        usuario.estado = req.body.estado;
        usuario.fechaCreacion = new Date();
        usuario.fechaActualizacion = new Date();

        usuario = await usuario.save();
        res.send(usuario);
    }catch (error){
        console.log(error);
        res.send('ocurrio un error');
    }
});

router.get('/', async function(req, res){
    try {
        const usuario = await Usuario.find();
        res.send(usuario);
    } catch (error) {
        console.log(error);
        res.send('ocurrio un error');
    }
});

router.put('/:usuarioId', async function(req, res){
    try {
        console.log('Objeto recibido',req.body, req.params);
        let usuario = await Usuario.findById(req.params.usuarioId);
        if (!usuario){
            return res.send('usuario no existe');
        }
        const existeusuario = await Usuario.findOne({email: req.body.email, _id:{$ne: usuario._id}});
        console.log('existe usuario', existeusuario);
        if (existeusuario){
                return res.send('email ya existe');
            }
        
        usuario.nombre = req.body.nombre;
        usuario.email = req.body.email;
        usuario.estado = req.body.estado;
        usuario.fechaActualizacion = new Date();
        usuario = await usuario.save();
        res.send(usuario);
    }catch (error){
        console.log(error);
        res.send('ocurrio un error');
    }
});



module.exports = router;