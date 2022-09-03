// <6 kyu> Array.diff
// Description: Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b keeping their order.
// Case 1: arrayDiff([1,2],[1]) == [2]
// Case 2: arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  return a.filter(item => !b.includes(item));
//   let diffArr = [];
//   a.forEach(item => {
//     if (b.indexOf(item)<0) {
//       diffArr.push(item);
//     }
//   })
//   return diffArr;
}