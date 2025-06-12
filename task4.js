//Armstrong
function armstrongNumber(num) {
    let digits = num.toString().split('').map(Number);
    let power = digits.length;
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(digits[i], power);
    }
    return sum === num;
}

//chuỗi Palindrome
function palindromeString(str) {
    let clean = "";
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (/[a-zA-Z0-9]/.test(ch)) {
            clean += ch.toLowerCase();
        }
    }
    let reversed = "";
    for (let i = clean.length - 1; i >= 0; i--) {
        reversed += clean[i];
    }

    return clean === reversed;
}

//số hoàn hảo
function perfectNumber(n) {
    if (n <= 1) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}

//chuỗi con
function substring(sub, str) {
    return str.includes(sub);
}

//số nguyên tố lớn nhất trong mảng
function primeNumber(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function findMaxPrime(arr) {
    let maxPrime = null;
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (primeNumber(value)) {
            if (maxPrime === null || value > maxPrime) {
                maxPrime = value;
            }
        }
    }
    return maxPrime;
}
console.log("153:", armstrongNumber(153));
console.log("'madam':", palindromeString("madam"));
console.log("28:", perfectNumber(28));
console.log("'abc' in 'abcxyz':", substring("abc", "abcxyz"));
console.log("[1, 97, 13, 9, 17]:", findMaxPrime([1, 97, 13, 9, 17]));