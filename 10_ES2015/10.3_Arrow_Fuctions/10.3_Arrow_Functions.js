/* ES5 */
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

/* ES2015 */
let double = arr => arr.map(val => val * 2)

/* ES5 */
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

/* ES2015 */
let squareAndFindEvens = numbers => {
    let squares = numbers.map(num => num ** 2);
    let evens = squares.filter(square => square % 2 === 0);
    return evens;
    }