import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  mas: [],
  res: [],
  getLength() {
    return this.mas.length
    
  },

  addLink(value) {
    this.mas.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    if (typeof position !== "number" || position > this.mas.length || position <= 0) {
      this.mas = [];
      throw new Error("You can't remove incorrect link!")}

    if (position === this.mas.length) {
      this.mas.pop()
      return this
    } else {
       this.mas.splice(position-1, 1)
       return this
    }
  },

  reverseChain() {
    this.mas.reverse();
    return this;
  },

  finishChain() {
    this.res = this.mas.join(`~~`)
    this.mas =[]
    return this.res;
  }
};
