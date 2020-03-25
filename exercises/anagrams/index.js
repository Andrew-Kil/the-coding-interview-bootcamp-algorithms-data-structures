// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
  (stringA = transformString(stringA)), (stringB = transformString(stringB));
  let objA = {},
    objB = {};
  [...stringA].forEach(el => (objA[el] = objA[el]++ || 1));
  [...stringB].forEach(el => (objB[el] = objB[el]++ || 1));
  for (let key in objA) {
    if (objA[key] !== objB[key]) return false;
  }
  for (let key in objB) {
    if (objB[key] !== objA[key]) return false;
  }
  return true;
};

const transformString = str =>
  [...str.replace(/[^\w]/g, "").toLowerCase()].sort();

module.exports = anagrams;
