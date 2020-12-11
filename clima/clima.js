const axios = require('axios');

const getClima = async(city) => {

    //console.log(city);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c59d0d97312ce8b2b91c503a93d15c9a&units=metric`
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ city }`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;
    const temp = data.main.temp;
    const clima = data.weather[0].description;

    // return {
    //     direccion,
    //     lat,
    //     lng,
    //     temp
    // }

    return `El clima de ${ direccion } es ${clima} con una temperatura de C ${ temp }`;

};

module.exports = {
    getClima
}