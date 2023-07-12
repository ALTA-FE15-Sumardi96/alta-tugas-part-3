function compareString(a: string, b: string): string {
  let result = "";
  const minLength = Math.min(a.length, b.length);

  for (let i = 0; i < minLength; i++) {
    if (a[i] === b[i]) {
      result += a[i];
    } else {
      break;
    }
  }

  return result;
}

console.log(compareString("AKA", "AKASHI")); // AKA
console.log(compareString("KANGAROO", "KANG")); // KANG
console.log(compareString("KI", "KIJANG")); // KI
console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
console.log(compareString("ILALANG", "ILA")); // ILA
