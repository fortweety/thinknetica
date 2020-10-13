function withoutPunctuationText(text) {
  return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ")
}

function wordsCount(text) {
  const wordsObject = withoutPunctuationText(text).split(' ').map(function(word) {
    return {
      word: word,
      length: word.length,
      isCapitalised: word[0] == word[0].toUpperCase()
    };
  })
return wordsObject;
}


console.log(wordsCount("some, Text for example  lalala!"))
