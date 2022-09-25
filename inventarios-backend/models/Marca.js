const {  Schema, model } = require("mongoose");

const Marcaschema = Schema({
    nombre: {
        type: String,
        require: true,       
    },
    estado: {
        type: String,
        required: true,
        enum: ['Activo', 'Inactivo']
    },

    fechaCreacion:{
        type: Date,
        required: true,
    },

    fechaActualizacion:{
        type: Date,
        required: true,
    }
});

module.exports = model('Marca', Marcaschema);