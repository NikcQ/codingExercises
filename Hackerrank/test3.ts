function palindromeIndex(s: string): number {

    const isPalindrome = (str: string) => str === str.split('').reverse().join('');
    
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      if (s[i] !== s[s.length - i - 1]) {

        if (isPalindrome(s.slice(0, i) + s.slice(i + 1))) {
          return i;
        } else if (isPalindrome(s.slice(0, s.length - i - 1) + s.slice(s.length - i))) {
          return s.length - i - 1;
        }

        return -1;
      }
    }
  
    // Return -1 if the string is already a palindrome
    return -1;
  }

console.log(palindromeIndex("aaab"))
console.log(palindromeIndex("baaa"))
console.log(palindromeIndex("abba"))
