


// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')
// const messageOne = document.querySelector('#message-1')
// const messageTwo = document.querySelector('#message-2')

// weatherForm.addEventListener("submit", async (e) => {
//   e.preventDefault(); 

//   const location = search.value;

//   messageOne.textContent = "Loading...";
//   messageTwo.textContent = "";

//   try {
//     const response = await axios.get('/weather?address=' + location);
//     const data = response.data;
//     if (data.error) {
//       // console.log(data.error);
//       messageOne.textContent = data.error;
//     } else {
//     //   messageOne.textContent = data.location;
//     //   messageTwo.textContent = data.forecast;
//     console.log(data.location);
//     }z   
//   } catch (e) {}
//   console.log(e);
// //   messageOne.textContent = data.e;
// });




// import axios from 'axios';
// const axios = require('axios')

// const { default: axios } = require("axios")

// const axios = require("axios")


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'From Javascript'

// debugger


weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading!!!!'
    messageTwo.textContent = ''
    //hello git
    console.log("Itsss workingg");
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
    //   messageOne.textContent = data.e;


    // axios.get('/weather?address=' + location)
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

    // .then((response) => console.log(response.data));


    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error)
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.place
                messageTwo.textContent = data.forecast
            }
        })
    })
})

