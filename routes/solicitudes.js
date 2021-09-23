// Estructura del CRUD
const router = require('express').Router();

const {
    crearSolicitud,
    obtenerSolicitud,
    modificarSolicitud,
    deleteSolicitud,
    countIdMascota

} = require('../controllers/solicitudes')

router.get('/', obtenerSolicitud)
router.get('/count/:cat', countIdMascota)
router.get('/:id', obtenerSolicitud)
router.post('/', crearSolicitud)
router.put('/:id', modificarSolicitud)
router.delete('/:id', deleteSolicitud)

module.exports = router;