const {  Schema , model } = require("mongoose");

const EstadoEquiposchema = Schema ({
    nombre: {
        type: String,
        required: true,       
    },
    estado: {
        type: String,
        require: true,
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

module.exports = model('EstadoEquipo',EstadoEquiposchema);