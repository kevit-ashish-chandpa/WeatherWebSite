const request = require('request')
// const axios = require('axios').default;

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidmFuc2hpa2FzaGFoIiwiYSI6ImNsNHA5Y3R3MzBmOGQzb3F6MTc2a2Rya2wifQ.IGTcSI7jp6numJIudBpAkA'

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
            })
        }
    })

    // const req = async () => {
    //     const response = await axios.get(url)
    //     console.log('hello')
    //   }
    //   req()
}
module.exports = geocode