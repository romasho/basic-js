import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 export default function repeater(str, options) {
  
  if (!options.additionSeparator) {
    var additionSeparator = '|'
  } else { var additionSeparator = options.additionSeparator }

  if (!options.separator) {
    var separator = '+'
  } else { var separator = options.separator }


  let addit = (options.addition !==undefined ? options.addition : '') + (additionSeparator)

  let finalAddit = addit.repeat(options.additionRepeatTimes || 1)

  let finalString = str + finalAddit

  let finalStringSepar = finalString.substr(0, finalString.length - (additionSeparator.length) ) + (separator)

   let f = finalStringSepar.repeat(options.repeatTimes || 1)

   return f.substr(0, f.length -(separator.length))
}






// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00'}) )
