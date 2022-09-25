const {Router} = require('express');
const router = Router();
const TipoEquipo = require('../models/TipoEquipo');

router.post('/',async function(req, res){
    try {
        
        let tipo = new TipoEquipo();
        tipo.nombre = req.body.nombre;
        tipo.estado = req.body.estado;
        tipo.fechaCreacion = new Date();
        tipo.fechaActualizacion = new Date();
        tipo = await tipo.save();
        res.send(tipo);
    }catch (error){
        console.log(error);
        res.send('ocurrio un error');
    }
});

router.get('/',async function(req, res){
    try {
        const tipo = await TipoEquipo.find();
        res.send(tipo);
    } catch (error) {
        console.log(error);
        res.send('ocurrio un error');
    }
});

router.put('/:tipoId',async function(req, res){
    try {
        let tipo = await TipoEquipo.findById(req.params.tipoId);
        if (!tipo){
            return res.send('estado no existe');
        }
        tipo.nombre = req.body.nombre;
        tipo.estado = req.body.estado;
        tipo.fechaCreacion = new Date();
        tipo.fechaActualizacion = new Date();
        tipo = await tipo.save();
        res.send(tipo);
    }catch (error){
        console.log(error);
        res.send('ocurrio un error');
    }
});

module.exports = router;