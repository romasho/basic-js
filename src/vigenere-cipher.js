import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
   
  constructor(mode = true) {
    this.mode = mode;
  }
  
 
  encrypt(text, key) {
    if (!text || !key) {throw new Error ("Incorrect arguments!")}
    let kf = Math.ceil(text.length / key.length);
    key = key.toUpperCase().repeat(kf);
    text = text.toUpperCase()
    let codeA = 'A'.charCodeAt(0);
    let abcCount = 26;
  
    let result = [];
    let counterKey = 0
    for (let i = 0; i < text.length; i++) {
      if (text[i].match(/[A-Z]/)) {
        let letterIdx = text.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(counterKey) - codeA;
        result.push(
          String.fromCharCode( codeA + (letterIdx + shift) % abcCount )
        );
        counterKey++
      } else {
        result.push(text[i]);
      }
    }
     return this.mode === false ? result.reverse().join("") :  result.join('');
  }

  decrypt(text, key) {
    if (!text || !key) {throw new Error ("Incorrect arguments!")}

    let kf = Math.ceil(text.length / key.length);
    key = key.toUpperCase().repeat(kf);
    text = text.toUpperCase()
    let codeA = 'A'.charCodeAt(0);
    let abcCount = 26;
  
    let result = [];
    let counterKey = 0
    for (let i = 0; i < text.length; i++) {
      if (text[i].match(/[A-Z]/)) {
        let letterIdx = text.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(counterKey) - codeA;
        counterKey++
        result.push(
          String.fromCharCode( codeA + (letterIdx - shift + abcCount) % abcCount )
        );
      } else {
        result.push(text[i]);
      }
    }
  
    return this.mode === false ? result.reverse().join("") :  result.join('');
  }
}
