import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (members === undefined)  {return false}
  if (members === null)  {return false}
  if (!Array.isArray(members))  {return false}
  members = members.filter(value => typeof value === "string")
  members = members.map(function(e){return e.trim();})
  members = members.map(function(e){return e.toUpperCase();})
  members = members.sort()

  let regexp = /[a-z]|[A-Z]/
  let res = ''

  for (let i = 0; i < members.length; i++) {
    if (regexp.test(members[i][0]) && typeof members[i] == 'string'){
    res += members[i][0]} else {res}
  } 
  return res
}