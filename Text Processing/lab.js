//---------------------LAB----------------------------
//01. Print Characters
function solve01(word) {
  for (const char of word) {
    console.log(char);
  }
}

//02. Substring
function solve02(word, startIndex, count) {
  console.log(word.substring(startIndex, startIndex + count));
}

//03. Censored Words
function solve03(sentence, word) {
  let newWord = "*".repeat(word.length);
  while (sentence.includes(word)) {
    sentence = sentence.replace(word, newWord);
  }
  console.log(sentence);
}

//04. Count String Occurrences
function solve04(text, word) {
  let count = 0;
  let words = text.split(" ");
  for (const item of words) {
    if (item === word) {
      count++;
    }
  }
  console.log(count);
}
solve04("This is a word and it also is a sentence", "is");
