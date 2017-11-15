const moment = require("moment");
 



const time = (input) => {
    
	var result = moment(input);
    
    const output = {
        unix: null,
        natural: null,
    };
    
    if (result.isValid()) {
        output.unix = result.format("X");
        output.natural = result.format("MMMM D, YYYY");
    }

    else{
    	result = moment(input, "X", true);
    	if (result.isValid()) {
        	output.unix = result.format("X");
        	output.natural = result.format("MMMM D, YYYY");
    	}
    }
    
    return output;
};

module.exports = time;