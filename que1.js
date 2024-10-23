// Remove all the duplicate values from an array..

let array = [1,2,2,3,3,3,4,4,4,4,5,5]
let unique = []
let uLength = 0

for(let i = 0 ; i < array.length ; i++)
{
    let present = false
    for(let j = 0 ; j < uLength ; j++) {
        if(array[i] == unique[j]) {
            present = true
            break
        }
    }
    if(!present) {
        unique[uLength] = array[i]
        uLength++
    }
}
console.log(unique)