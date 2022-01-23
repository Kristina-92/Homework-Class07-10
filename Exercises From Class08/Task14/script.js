// Task 14
//Write javascript program that will take the items from a given array 
//and make new aray with the same items in revers order.

let arrayOrder = [1, 5, 10, 56, 85, 52, 6, 12]

function reverse(array){
    let arrayReverse = [];
    for(i = array.length - 1; i > -1; i--){
        arrayReverse.push(array[i]);
    }
    return arrayReverse;
}
 let reverseArray = (reverse(arrayOrder));
 console.log(reverseArray);