const request = require('request')
const axios = require('axios')
const geocode = (address, callback) => {

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYXNoaXNoMTQ4NSIsImEiOiJjbDR4cTE2ZDgwNjVhM2NuMzhqenc1aWU5In0.X1IGD8G66SZvVxHkT1K2mA`

    axios.get(url).then(({data})  => {
        callback(undefined, {
            latitude: data.features[0].center[1],
            longtitude: data.features[0].center[0],
            place: data.features[0].place_name
        })
    }).catch(({error})=>{
        callback(undefined, 'There will be an error with your server ')
    })
}
module.exports = geocode
