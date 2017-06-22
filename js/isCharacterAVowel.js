// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

function isCharacterAVowel(str) {
  var vowel = ["a","e","i","o","u"]
  for(var i = 0; i < vowel.length;i++) {

    if (str === vowel[i]) {
      return true;

    } else if (str.length !== 1) {
      return "invalid entry";
      }
  }

return false
}

isCharacterAVowel("y")
