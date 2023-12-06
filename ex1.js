// solution 1
let words = ['hello', 'world'];

function getWordLengths(words) {
    return words.length;
}

const result = words.map(getWordLengths);

console.log(result); // Output: [5, 5]

// solution 2
let words2 = ['hello', 'world'];

function getWord2Lengths(words2){
    return words2.map(word2 => word2.length)
}

const result2 = getWord2Lengths(words2);
console.log(result2)