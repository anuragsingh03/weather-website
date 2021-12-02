const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FudXJhZzQzNDIiLCJhIjoiY2t2dXU0bWk4MDQ5bjJ2cGg0ZXlkZ2tkciJ9.30ZRJtMCzVX9IgTK5f8srA';
   

    request({ url, }, (error,response ) => {
        const data=JSON.parse(response.body);
       
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (data.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude:data.features[1].center[1],
                longitude:data.features[1].center[0],
                location:data.features[0].place_name
            })
            console.log(data.features[1].center[1]);
            console.log(data.features[1].center[0]);
            console.log(data.features[0].place_name);
        }
    })
}
//geocode('Lucknow');

module.exports = geocode