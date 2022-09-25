const {   Schema,model } = require("mongoose");

const TipoEquiposchema = Schema({
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

module.exports= model('TipoEquipo', TipoEquiposchema);