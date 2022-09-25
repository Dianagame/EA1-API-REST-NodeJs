const {Router} = require('express');
const router = Router();
const EstadoEquipo = require('../models/EstadoEquipo');

router.post('/',  async function(req, res){
    try {
        let estadoequipo = new EstadoEquipo();
        estadoequipo.nombre = req.body.nombre;
        estadoequipo.estado = req.body.estado;
        estadoequipo.fechaCreacion = new Date();
        estadoequipo.fechaActualizacion = new Date();
        estadoequipo = await estadoequipo.save();
        res.send(estadoequipo);
    }catch (error){
        console.log(error);
        res.send('ocurrio un error');
    }
});

router.get('/', async function(req, res){
    try {
        const estadoequipo = await EstadoEquipo.find();
        res.send(estadoequipo);
    } catch (error) {
        console.log(error);
        res.send('ocurrio un error');
    }
});

router.put('/:estadoequipoId', async function(req, res){
    try {
        let estadoequipo = await EstadoEquipo.findById(req.params.estadoequipoId);
        if (!estadoequipo){
            return res.send('estado no existe');
        }
        estadoequipo.nombre = req.body.nombre;
        estadoequipo.estado = req.body.estado;
        estadoequipo.fechaActualizacion = new Date();
        estadoequipo = await estadoequipo.save();
        res.send(estadoequipo);
    }catch (error){
        console.log(error);
        res.send('ocurrio un error');
    }
});

module.exports = router;