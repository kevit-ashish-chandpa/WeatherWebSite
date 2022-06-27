const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidmFuc2hpa2FzaGFoIiwiYSI6ImNsNHA5Y3R3MzBmOGQzb3F6MTc2a2Rya2wifQ.IGTcSI7jp6numJIudBpAkA'

    // request({ url: url, json: true }, (error, responce) => {
    //     if (error) {
    //         callback('Unable to connect to service', undefined)
    //     } else if (responce.body.features.length === 0) {
    //         callback('Unable to connect to location', undefined)
    //     }
    //     else {
    //         callback(undefined, {
    //             latitude: responce.body.features[0].center[1],
    //             longtitude: responce.body.features[0].center[0],
    //             place: responce.body.features[0].place_name
    //             // console.log(latitude, longtitude, place)
    //         })

    //     }


    // })



    //shorthand
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to service', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to connect to location', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                place: body.features[0].place_name
                // console.log(latitude, longtitude, place)
            })
        }
    })
}
module.exports = geocode