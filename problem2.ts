function joinArrayRemoveDuplicate(
  arrayA: string[],
  arrayB: string[]
): string[] {
  const combinedArray = [...arrayA, ...arrayB]; // Menggabungkan array A dan B menggunakan operator spread

  const uniqueArray = Array.from(new Set(combinedArray)); // Menghilangkan duplikat dengan mengonversi array ke Set dan kembali ke array

  return uniqueArray;
}
console.log(
  joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"])
);
// Output: ["apel", "anggur", "lemon", "leci", "nanas"]

console.log(
  joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"])
);
// Output: ["samsung", "apple", "sony", "xiaomi"]

console.log(
  joinArrayRemoveDuplicate(
    ["football", "basketball"],
    ["basketball", "football"]
  )
);
// Output: ["football", "basketball"]
