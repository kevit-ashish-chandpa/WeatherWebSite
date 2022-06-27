// const { response } = require('express')

console.log('Client side javascipt is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading!!!!'
    messageTwo.textContent = ''
//hello git
    fetch('http://localhost:3090/weather?address='+ location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error)
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.place
                messageTwo.textContent = data.forecast
                // console.log(data.place)
                // console.log(data.forecastData)
            }
        })
    })
})

