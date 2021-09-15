import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  const regexp = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$|^(\-|\+)?\d+(\.\d+)?$/
  if (typeof sampleActivity !== 'string') {return false}
  if (sampleActivity <= 0 || sampleActivity > 15) {return false}
  if (sampleActivity.length === 0) {return false}
  
  if (regexp.test(sampleActivity) === false) {return false}

   return (Math.ceil(Math.log(MODERN_ACTIVITY / + sampleActivity) / (0.693 / HALF_LIFE_PERIOD)))
  }