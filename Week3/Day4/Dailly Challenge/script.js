// Daily Challenge: Not Bad
// Create a variable called sentence. Assign to this variable, a string that has the word “not” and “bad” inside. 
// For example, “The movie is not that bad really, I like it”
// Create a variable called wordNot that retrieves the first appearance of the substring “not” (from the sentence)
// Create a variable called wordBad that retrieves the first appearance of the substring “bad” (from the sentence)
// If the word “bad” follows the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good really, I like it”
// If the words “not” and “bad” are not in the right sequence (or are not in the sentence), just console.log the original sentence.


let sentence = 'The movie is not that bad really, I like it!'

let wordNot = sentence.match (/not/g)

console.log (wordNot)

let wordBad = sentence.match (/bad/g)

console.log(wordBad)

let novo = sentence.replace ("not that bad","good")

console.log(novo)

// tried regex but didn`t succeed 