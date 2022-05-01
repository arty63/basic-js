const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if (!date) {
    return 'Unable to determine the time of year!';
    }
    if ((!(date instanceof Date)) || (Object.keys(date).length > 0)) {
      throw new Error("Invalid date!");
    }
  let month = date.getMonth()
  if ([1,11,0].includes(month) ){
    return 'winter'
  }else if ([3,4,2].includes(month) ){
    return 'spring'
  }else if ([6,7,5].includes(month) ){
    return 'summer'
  }else{
    return 'autumn'
  }

}

module.exports = {
  getSeason
};
