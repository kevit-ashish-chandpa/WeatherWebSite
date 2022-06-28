const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { query } = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const { createSecretKey } = require('crypto')


console.log(__dirname)
// console.log(__filename)
console.log(path.join(__dirname, '../public'))


const app = express()
const port = process.env.PORT || 3090

//define path for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views') //for changing name from views to templates 
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath) //for changing name from views to templates 

hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))           //for customising a server



app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Ashish'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Ashish'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help the Person',
        name: 'Ashish'
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found',
        name: 'Ashish'
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please Provide an Address'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, place } = {}) => {
        if (error) {    //California 94122
            return res.send({ error })
        }
        // res.send({ place })
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }
            res.send({
                place: place,
                forecast: forecastData,
                address: req.query.address
            })
            // console.log(forecastData)
        })

    })
})
app.get('/products', (req, res) => {
    if (!req.query.games) {
        res.send({
            error: 'There is no search Product'
        })
    }
    console.log(req.query.ratings)
    res.send({
        products: []
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found',
        name: 'Ashish'
    })
})

app.listen(port, () => {
    console.log('server is up on port ' + port)
})