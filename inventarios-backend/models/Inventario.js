const { Schema, modelo, model} = require("mongoose");


const Inventarioschema = Schema ({
    serial: {
        type: String,
        required: true,       
    },
    modelo: {
        type: String,
        required: true,
        
    },

    descripcion:{
        type: String,
        required: true,
    },

    foto:{
        type: String,
        required: true,
    },

    color:{
        type: String,
        required: true,
    },

    fechaCompra:{
        type: String,
        required: true,
    },

    Precio:{
        type: Number,
        required: true,
    },

    usuario: {
        type: Schema.Types.ObjectId,
        ref:'Usuario',
        required: false,
    },

    marca: {
        type: Schema.Types.ObjectId,
        ref:'Marca',
        required: true,
    },
    
    EstadoEquipo: {
        type: Schema.Types.ObjectId,
        ref:'EstadoEquipo',
        required: true,
    },
    TipoEquipo: {
        type: Schema.Types.ObjectId,
        ref:'TipoEquipo',
        required: true,
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

module.exports = model('Inventario', Inventarioschema)