/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/


// https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

//*simplest implementations ES6
// function steamrollArray(arr) {
//     // I'm a steamroller, baby
//     return [].concat(...arr);
// }

//*older implementation
// function steamrollArray(arr) {
//     return [].concat.apply([], arr);
// }

//*recursive implementation
// function flatten(arr) {
//     return arr.reduce(function (flat, toFlatten) {
//       return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//     }, []);
//   }


//*my implementation using recursive
function steamrollArray(arr) {

var result = [];

recursive(arr);

function recursive(arr) {

  //breakup the array and proccess each element
    arr.forEach(function (arrElement) {

      //if the element is still an array,
      if (Array.isArray(arrElement)) {
        
        //call the function again to break it up into smaller elements
        recursive(arrElement);
      } else {

        //if the element is not an array, store the element
        result.push(arrElement);
      }
    });
  }
  
  return result;
}

console.log(steamrollArray([[["a"]], [["b"]]])); // should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])); // should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])); // should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return [1, {}, 3, 4].