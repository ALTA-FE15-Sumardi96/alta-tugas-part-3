function meanMedian(arrayInput: number[]): string {
  const length = arrayInput.length;
  const mean = arrayInput.reduce((sum, num) => sum + num, 0) / length;
  const median =
    length % 2 === 0
      ? (arrayInput[length / 2 - 1] + arrayInput[length / 2]) / 2
      : arrayInput[Math.floor(length / 2)];
  return `${mean.toFixed(1)} ${median.toFixed(1)}`;
}
console.log(meanMedian([1, 2, 3, 4])); // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5])); // 3 3
console.log(meanMedian([7, 8, 9, 13, 15])); // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50])); // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])); // 49 30
