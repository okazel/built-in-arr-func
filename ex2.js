let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
    return words.length >= 5;
}

const result = words.filter(get5CharWords);

console.log(result); // Output: ["apple", "elephant"]


let words2 = ["apple", "cat", "dog", "elephant"];

function get5CharWords2(words) {
    return words2.filter(word2 => word2.length >= 5);
}

const result2 = get5CharWords2(words2);
console.log(result2)