function removeDuplicate(array: number[]): number {
  let uniqueCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      array[uniqueCount] = array[i];
      uniqueCount++;
    }
  }
  return uniqueCount;
}

console.log(removeDuplicate([2, 3, 3, 6, 9, 9]));
console.log(removeDuplicate([2, 3, 4, 5, 6, 9, 9]));
console.log(removeDuplicate([2, 2, 2, 11]));
console.log(removeDuplicate([1, 1, 2, 2, 3, 3, 4, 4]));
console.log(removeDuplicate([1, 2, 3, 11, 11]));
