const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");


const string = "_eye";
console.log(string.split("").reverse().join(''));

const isPalindrome = (entry) => {
  const normalizedStr = entry.toLowerCase().replace(/[\W_]/g, '');
  const reverseEntry = normalizedStr.split('').reverse().join('');
  return normalizedStr === reverseEntry;  

};

checkBtn.addEventListener("click", () => {
  const inputValue = textInput.value;
  if (inputValue === '') {
    alert("Please input a value");
    return;
  }
  const isPalindromeYes = isPalindrome(inputValue);
  
  if (isPalindromeYes) {
    result.textContent = `${inputValue} is a palindrome`;
  } else {
    result.textContent = `${inputValue} is not a palindrome`;
  }
});
