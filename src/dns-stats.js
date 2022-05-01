const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const obj = {};
  for (let i of domains) {
    const changeDom = i.split(".").reverse();
    changeDom.forEach((el, i) => {
      if (i === 0) {
        console.log(changeDom[0])
        const first = `.${changeDom[0]}`;
        obj.hasOwnProperty(first)
          ? obj[first]++
          : (obj[first] = 1);
      } else {
        const fullDomain = `.${changeDom.slice(0, i + 1).join(".")}`;
        obj.hasOwnProperty(fullDomain)
          ? obj[fullDomain]++
          : (obj[fullDomain] = 1);
      }
    });
    
  }
  return obj;
}

module.exports = {
  getDNSStats
};
