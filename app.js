//Express
const express = require('express');
const app = express();

//Body Parser
//Todo lo que recibe en el body lo pone en formato json
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuracion de la Base de datos
const mongoose = require("mongoose");

//var isProduction = process.env.NODE_ENV === 'production';

mongoose.connect(
    process.env.MONGODB_URI, // obtiene la url de conexión desde las variables de entorno
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);


mongoose.set("debug", true);//Para ver explicitamente los errores

require('./models/Usuario');
require('./models/Mascota');
require('./models/Solicitud');
require('./config/passport')

//Configurando las rutas
app.use('/v1', require('./routes'));

//Inicialización del servidor
//como primer parámetro de listen() le pasamos el puerto 
//que va a estar escuchando y como segundo un callback 
//que se ejecuta una vez que el servidor está corriendo 
//y listo para recibir peticiones.
// Iniciando el servidor...
var server = app.listen(process.env.PORT, function () {
    console.log('Escuchando en el puerto ' + server.address().port);
  });






/*const gods = [
    { name: 'Zeus' },
    { name: 'Hades' },
    { name: 'Hermes' }
];

//Se define cómo debe reaccionar el servicio al acceder a la ruta indicada
//intencion:get; subdireccion a la que va a acceder; comportamiento se maneja con el request y response
app.get('/gods', (req, res, next) => {
    res.send(gods)
});

//Reto 1 Sesion 2
const constelaciones = {
    Andromeda: {
        abreviatura: 'And',
        superficie: 722.3,
        num_estrellas: 152,
        estr_mas_brillante: 'Alpheratz'
    },
    Aquila: {
        abreviatura: 'Aql',
        superficie: 652.5,
        num_estrellas: 124,
        estr_mas_brillante: 'Altair'
    },
    Ara: {
        abreviatura: 'Ara',
        superficie: 237.1,
        num_estrellas: 71,
        estr_mas_brillante: 'Beta Arae'
    },
    Bootes: {
        abreviatura: 'Boo',
        superficie: 906.8,
        num_estrellas: 144,
        estr_mas_brillante: 'Arturo'
    },
    Lyra: {
        abreviatura: 'Lyr',
        superficie: 286.5,
        num_estrellas: 73,
        estr_mas_brillante: 'Vega'
    }
}

app.get('/constelaciones', (req, res) => {
    res.send(constelaciones)
});

//Ejemplo 2 Sesion 2
const gods2 = {
    Zeus: { live: 'Olympus', symbol: 'Thunderbolt' },
    Hades: { live: 'Underworld', symbol: 'Cornucopia' }
};

app.get('/gods/:name', (req, res, next) => {
    const good = gods2[req.params.name];
    if (good) {
        res.send(good);
    } else {
        res.status(404).send('Good Not Found');
    }
});


//Reto 2 Sesion 2
function buscarPorAtributo(constelaciones, atributo) {
    let resultado = {};
    for (const obj in constelaciones) {
        if (obj == atributo) {
            resultado = {[obj] : constelaciones[obj]}
        }else{
            for (const prop in constelaciones[obj]) {
                if (constelaciones[obj][prop] == atributo) {
                    resultado = {[obj] : constelaciones[obj]}
                }
            }
        }
    }
    return resultado
}

app.get('/constelaciones/:prop', (req, res) => {
    const constelacion = buscarPorAtributo(constelaciones, req.params.prop)
    if (constelacion) {
        res.send(constelacion);
    } else {
        res.status(404).send('No se encontró la constelación');
    }
});

//Ejemplo 3 sesion 2
app.put('/gods/:name', (req, res) => {
    const god = req.body;
    gods2[req.params.name] = god
    res.send(gods);
})

app.post('/gods', (req, res) => {
    const name = req.query.name
    const newGod = req.body;
    gods[name] = newGod;
    res.status(200).send(gods);
})

app.delete('/gods/:name', (req, res) => {
    const name = req.params.name;
    if (delete gods[name]) {
        res.send(gods)
    } else {
        res.status(500)
    }
})
*/


