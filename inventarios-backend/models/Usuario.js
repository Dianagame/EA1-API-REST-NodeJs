const { Schema,model } = require("mongoose");

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        require: true,       
    },
    email:{
        type: String,
        require: true, 
        unique: true,      
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

module.exports = model('Usuario', UsuarioSchema);