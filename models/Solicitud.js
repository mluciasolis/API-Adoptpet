const mongoose = require('mongoose');

const SolicitudSchema = new mongoose.Schema({
    idMascota: {type:mongoose.Schema.Types.ObjectId, ref:'Mascota'},
    fechaDeCreacion: String,
    idUsuarioAnunciante: {type:mongoose.Schema.Types.ObjectId, ref:'Usuario'},
    idUsuarioSolicitante: {type:mongoose.Schema.Types.ObjectId, ref:'Usuario'},
    estado:{type: String, enum:['Disponible', 'Adoptado']},
}, { timestamps: true , collection : 'Solicitudes'})

SolicitudSchema.methods.publicData = function(){
	return {
		id: this.id,
        idMascota: {type:mongoose.Schema.Types.ObjectId, ref:'Mascota'},
        fechaDeCreacion: this.fechaDeCreacion,
        idUsuarioAnunciante: this.idUsuarioAnunciante,
        idUsuarioSolicitante: this.idUsuarioSolicitante,
		estado: this.estado
	};
};

mongoose.model('Solicitud', SolicitudSchema)

/*
// Solicitud.js
class Solicitud {
    constructor(id, idMascota, fechaDeCreacion, idUsuarioAnunciante, idUsuarioSolicitante, estado) {
        this.id = id;
        this.idMascota = idMascota;
        this.fechaDeCreacion = fechaDeCreacion;
        this.idUsuarioAnunciante = idUsuarioAnunciante;
        this.idUsuarioSolicitante = idUsuarioSolicitante;
        this.estado = estado;
    }

}

module.exports = Solicitud;
*/
