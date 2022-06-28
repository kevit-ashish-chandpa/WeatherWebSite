
// const axios = require('axios')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'From Javascript'

// debugger
//
// console.log('Client side JavaScript File')
// const url = 'http://localhost:3000/weather?address=' + address
// axios.get(url).then(({ data }) => {
//     // console.log(data.location);
//     // console.log(data.forcast);
//     messageOne.textContent = data.place
//     messageTwo.textContent = data.forecast
// }).catch((error) => {
//     if (error.response) {
//         messageOne.textContent = data.error;
//     }
//     else if (error.request) {
//         callback('Unable to connect to weather services!', undefined)
//     }
//     else {
//         callback('Cannot search the weather, check for the new latitude and longitude', undefined)
//     }

// })

//     //1st implementaton

//     .then((response) => {
//         response.json().then((data) => {
//             if (data.error) {
//                 // console.log(data.error)
//                 messageOne.textContent = data.error;
//             } else {
//                 messageOne.textContent = data.place
//                 messageTwo.textContent = data.forecast
//             }
//         })
//     })
//     .catch((error) => {
//         console.log("Hello");
//     })

//2 nd implementation

//

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading!!!!'
    messageTwo.textContent = ''
    //hello git
    
    try {
        const response = await axios.get('/weather?address=' + location);
        const data = response.data;
        if (data.error) {
            // console.log(data.error);
            messageOne.textContent = data.error;
        } else {
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
            // console.log(data.location);
        }
    } catch (e) { }
    console.log(e);
    console.log("Itsss workingg");
})

