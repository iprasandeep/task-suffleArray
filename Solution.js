function shuffle(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Swap adjacent elements starting from the second element
  for (let i = 1; i < arr.length - 1; i += 2) {
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
  }
  return arr;
}
let nums = [2, 1, 5, 3, 11, 7];
 
console.log(shuffle(nums))
