const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
const lugar = require('./clima/clima');

let city = argv.direccion;

lugar.getClima(city)
    .then(console.log)
    .catch(console.log);