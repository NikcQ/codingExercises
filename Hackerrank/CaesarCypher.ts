// Hackerrank Caesar Cypher challenge

// Julius Caesar protected his confidential information by encrypting it using a cipher.
// Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet,
// just rotate back to the front of the alphabet.
// In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

function caesarCipher(s: string, k: number): string {
  let alphabet: string[] = [...Array(26)].map((_, i) =>
    String.fromCharCode(i + 97)
  ); // Generating lowercase ENGLISH alphabet

  // Rotating alphabet by k%26 (making sure k is between 0 - 26 bounds) positions
  const newAlphabet = alphabet.slice(k % 26).concat(alphabet.slice(0, k % 26));

  // Empty array to be populated
  let newString: string[] = [];

  // Uppercase detection function
  const isUpperCase = (str: String) => str === str.toUpperCase();

  for (const char of s) {
    // For - of lets me iterate through the chars directly

    if (alphabet.includes(char.toLowerCase())) {
      if (isUpperCase(char)) {
        newString.push(
          newAlphabet[alphabet.indexOf(char.toLowerCase())].toUpperCase()
        );
      } else {
        newString.push(newAlphabet[alphabet.indexOf(char)]);
      }
    } else {
      newString.push(char); // pushing special characters on their respective positions
    }
  }
  return newString.join(""); // returning strings
}

console.log(caesarCipher("middle-Outz", 2));
export let x = 123;
