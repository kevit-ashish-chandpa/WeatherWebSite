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
        res.send({
            error: 'Please Provide an Address'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, place } = {}) => {
        if (error) {    //California 94122
            return res.send({ error })
        }
        res.send({ place })
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }
            res.send({
                forecast: forecastData,
                address: req.query.address
            })
            // console.log(forecastData)
        })

    })
    // res.send({
    //     forecast: 'It is snwoing',
    //     location: 'my_Lookk',
    //     address: req.query.address
    // })
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

// app.get('*', (req,res)=>{
//     res.send('good morning its not useful for u!!!')
// })

// app.get('/help/*', (req,res)=>{
//     res.send('helping not supported in u morning its not useful for u!!!')
// })


app.listen(3090, () => {
    console.log('server is up on port 3090.')
})



// app.get('', (req, res)=>{
//     res.send('<h1>hello express</h1>')
// })


//now making it from html page

// app.get('/help', (req, res)=>{
//     res.send([{
//         name: 'Andrew',
//         age: 27
//     },{
//         name: 'ff',
//         age: 257
//     }])
// })
// app.get('/about', (req, res)=>{
//     res.send('<h1>about page</h1>')
// })



// app.com
// app.com/help
// app.com/about



