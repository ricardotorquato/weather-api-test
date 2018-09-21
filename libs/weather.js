const data = require( '../data/weather_list.json' )
    , date = require( './date' )
    , weather = {};

weather.findByCityId = (cityId, { startDate, endDate } = {}) => {
    const startDateFilter = typeof(startDate) === 'string' ? date.toTimestamp( startDate ) : -Infinity;
    // Tip: the 86390 is for 23:59:59 that I need to be all day
    const endDateFilter = typeof(endDate) === 'string' ? date.toTimestamp( endDate ) + 86390 : Infinity;

    myData = data.filter( w => w.cityId === cityId )[0];

    if ( typeof(myData) === 'object' && typeof(myData.data) === 'object' ) {
        const startDateFilterFn = w => w.dt >= startDateFilter;
        const endDateFilterFn = w => w.dt <= endDateFilter;

        return myData.data.filter(startDateFilterFn).filter(endDateFilterFn);
    }

    return [];
}

weather.getAllCitiesId = () => data.map( d => d.cityId );

module.exports = weather;