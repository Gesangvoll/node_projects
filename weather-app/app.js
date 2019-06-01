const request = require('request')

const url = 'https://api.darksky.net/forecast/1851277244e6d728609794e840c87893/37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})