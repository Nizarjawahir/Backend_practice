function gets(array, get) {
    let start = 0
    let end = array.length - 1

    while (start <= end) {
        let op = Math.floor((start + end) / 2)
        
        if (array[op] === get) {
            
            return op
        } else if (array[op] < get) {
            
            start = op + 1
        } else {
            
            end = op - 1
        }
    }
    
}

const array = ["cash", "gold", "silver"];
const get = "cash";

const index = gets(array, get);

console.log(`The index value is ${index}.`);

