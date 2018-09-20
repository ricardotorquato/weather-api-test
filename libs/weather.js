const data = require( '../data/weather_list.json' )
    , weather = {};

weather.findByCityId = (cityId) => {
    myData = data.filter( w => w.cityId === cityId )[0];
    
    return typeof(myData) === 'object' ? myData.data : null;
}

module.exports = weather;