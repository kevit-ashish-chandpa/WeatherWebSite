const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dc7236498f4206225427498bc6de5b25&query=' + latitude + ',' + longitude + '&units=s';

    // request({ url: url, json: true }, (error, responce) => {
    //     if (error) {
    //         callback('Unable to connect to weather App', undefined)
    //     } else if (responce.body.error) {
    //         callback('Unable to find location', undefined)
    //     } else {
    //         console.log('It is current ' + responce.body.current.temperature + ' degree out. There is a ' + responce.body.current.precip + ' chance of rain')
    //     }

    // })



    //shorthand syntax
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            // callback('Unable to connect to weather App', undefined)
            callback(undefined, 'Unable to connect to weather App')
        } else if (body.error) {
            // callback('Unable to find location', undefined)
            callback(undefined ,'Unable to find location')
        } else {
            // callback('It is current ' + body.current.temperature + ' degree out. There is a ' + body.current.temperature + ' chance of rain', undefined)
            // callback(undefined, 'It is current ' + body.current.temperature + ' degree out. There is a ' + body.current.weather_code + ' weather code')
            console.log( 'It is current ' + body.current.temperature + ' degree out. There is a ' + body.current.weather_code + ' weather code')
        }

 
    })
}
module.exports = forecast;