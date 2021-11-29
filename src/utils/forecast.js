const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=2defc3ef029a9157dd39486f791d3ba7&query=" + latitude + "," + longitude + "&units=m";

    request({ url:url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect', undefined);
        } else if (body.error) {
            callback('Unable to find forecast', undefined);
        } else  {
            callback(undefined, body.current.weather_descriptions[0] + ": It is currently " + body.current.temperature + " degrees. It feels like " + body.current.feelslike + " degrees.");
        }
    });
}

module.exports = forecast;