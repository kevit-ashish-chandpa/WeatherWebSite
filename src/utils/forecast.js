const request = require("request");
const axios = require('axios')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9e5d9304a16e71ad3dd472da9de499d1&query=' + latitude + ',' + longitude + '&units=s';
    // axios.get(url).then(({ error }) => {
    //     callback(undefined, 'its andd error')
    // })
    //     .catch(() => {
    //         callback(undefined, 'It is current ' + body.current.temperature + ' degree out. There is a ') //+ body.current.weather_code + ' weather code')
    //     })
    axios.get(url).then(({ data }) => {
        
        // callback(undefined, `${data.current.weather_descriptions[0]}. It is currently ${data.current.temperature} out but it feels like ${data.current.feelslike} out`)
        callback(undefined, 'It is current ' + data.current.temperature + ' degree out. '+ data.current.weather_descriptions[0] + '. ')

    }).catch((error) => {
        if (error.response) {
            callback('Bad request!', undefined)
        }
        else if (error.request) {
            callback('Unable to connect to weather services!', undefined)
        }
        else {
            callback('Cannot search the weather, check for the  new latitude and longitude', undefined)
        }
    })



    //shorthand syntax
    // request({ url, json: true }, (error, { body }) => {
    //     if (error) {
    //         callback(undefined, 'Unable to connect to weather App')
    //     } else if (body.error) {
    //         callback(undefined, 'Unable to find location')
    //     } else {
    //         callback(undefined, 'It is current ' + body.current.temperature + ' degree out. There is a ' + body.current.weather_code + ' weather code')
    //     }
    // })

}
module.exports = forecast;







// const forecast = (latitude, longitude, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=dc7236498f4206225427498bc6de5b25&query=' + latitude + ',' + longitude + '&units=s';


//     axios.get({url}).then(response => {
//         callback(undefined, 'It is current ' + body.current.temperature + ' degree out. There is a ' + body.current.weather_code + ' weather code')
//     }).catch({error})

    // //shorthand syntax
    // request({ url, json: true }, (error, { body }) => {
    //     if (error) {
    //         callback(undefined, 'Unable to connect to weather App')
    //     } else if (body.error) {
    //         callback(undefined ,'Unable to find location')
    //     } else {
    //         callback(undefined, 'It is current ' + body.current.temperature + ' degree out. There is a ' + body.current.weather_code + ' weather code')
    //     }
    // }))
// }
// module.exports = forecast;