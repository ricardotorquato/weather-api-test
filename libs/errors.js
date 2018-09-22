class CustomError extends Error {
    constructor(message) {
        super(message);
        
        this.name = this.constructor.name;
        
        Error.captureStackTrace(this, this.constructor);
    }
}

class InvalidDateFormat extends CustomError { }

class InvalidDateValue extends CustomError { }

class InvalidDateOrder extends CustomError { }

module.exports = { InvalidDateFormat, InvalidDateValue, InvalidDateOrder };