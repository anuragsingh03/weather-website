const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=570e1116000d7704dd71a00f926ab4cd&query=' + latitude + ',' + longitude;
    //const url='http://api.weatherstack.com/current?access_key=570e1116000d7704dd71a00f926ab4cd&query= + encodeURIComponent(latitude)+','+encodeURIComponent(longitude)'

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.error) {
            callback('Unable to find location', undefined)
        } else {
            //callback(undefined, {temperature:response.body.current.temperature + ' It is currently ' + response.body.current.wind_speed + ' degress out. There is a ' + response.body.current.weather_descriptions[0] + '% chance of rain.')
            callback(undefined,{
                temperature:response.body.current.temperature,
                wind:response.body.current.wind_speed ,
                description:response.body.current.weather_descriptions[0] 
            })
            //console.log(response.body.current.temperature +" "+response.body.current.wind_speed+" "+response.body.current.weather_descriptions[0] );
        }
    })
}
//forecast(26.850000,80.949997);

module.exports = forecast;