const date = {};

date.isFormatValid = myDate => /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(myDate);

date.isValid = myDate => {
    
    if ( !date.isFormatValid(myDate) ) {
        throw new Error('Invalid date format. Use yyyy-mm-dd');
    }

    return !isNaN(Date.parse(myDate));
};

date.toTimestamp = myDate => {
    if ( !date.isFormatValid(myDate) ) {
        throw new Error('Invalid date format. Use yyyy-mm-dd format.');
    }

    if ( !date.isValid(myDate) ) {
        throw new Error('Invalid date value. Verify and try again.');
    }

    return Date.parse(myDate) / 1000;
};

module.exports = date;