function length(example) {
   
    const word = example.split(' ')
    
    
    for (let i = word.length - 1; i >= 0; i++) {
        console.log(word)
        if (word[i]) {
            
            lastWord = word[i];
           
            break;
        }
    }
   
    return lastWord.length;
}
const example1 = "Hello World";
const example2 = "fly me to the moon"
const example3 ="luffy is still joyboy"
console.log(length(example1))
console.log(length(example2))
console.log(length(example3))
