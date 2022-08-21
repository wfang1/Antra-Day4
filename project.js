//Question 1:
let qOne = 32243;

function reverse(num) {
    let stringNum = String(num); // convert to string
    let result = '';
    // iterate through the string in reverse
    for(let size = stringNum.length; size > 0; --size) {
        result += stringNum.charAt(size - 1);
    }

    return result;
}

console.log("Question 1:")
console.log(reverse(qOne));

//Question 2:
let qTwo = "Madam";

function palindrome(word) {
    // first set to lowercase to be able to check equivalency
    let lcWord = word.toLowerCase();
    let size = lcWord.length - 1;
    
    for(let i = 0; i < size; ++i, --size) {
        if(lcWord.charAt(i) != lcWord.charAt(size))
            return false;
    }

    return true;
}

console.log("Question 2:");
console.log(palindrome(qTwo));

//Question 3:
let qThree = "dog";

function stringCombinations(word) {
    let lcWord = word.toLowerCase();
    let stringArray = [];
    let size = lcWord.length;

    // iterate through each letter and then through each substring letter
    for(let i = 0; i < size; ++i) {
        let substring = '';
        for(let j = i; j < size; ++j) {
            substring += lcWord.charAt(j);
            stringArray.push(substring);
        }
    }

    return stringArray;
}

console.log("Question 3:");
stringCombinations(qThree).forEach(element => console.log(element));

//Question 4:
let qFour = 'webmaster';

function debugLogArray(array) {
    for(letter of array)
        console.log(letter);
}

function stringtoArray(word) {
    let sArray = [];

    for(let i = 0; i < word.length; ++i) {
        sArray.push(word.charAt(i));
    }

    return sArray;
}

// iterate through the string and reorder elements
function arraytoString(array) {
    let string = '';

    for(letter of array)
        string += letter;

    return string;
}

console.log("Question 4:");
console.log(arraytoString(stringtoArray(qFour).sort()));

//Question 5:
let qFive = 'the quick brown fox';

function upperSentence (sentence) {
    let result = '';
    let pastSpace = true;

    for(let i = 0; i < sentence.length; ++i) {
        let character = sentence.charAt(i);
        
        if(pastSpace === true) {
            character = character.toUpperCase();
            pastSpace = false;
        }
        if(character === ' ')
            pastSpace = true;
            
        result += character;
    }

    return result;
}

console.log("Question 5:")
console.log(upperSentence(qFive));

//Question 6:
let qSix = 'Web Development Tutorial';

function findLargest(array) {
    let largest = 0;
    let index = 0;
    let result = -1;

    for(word of array) {
        if(word.length > largest) {
            largest = word.length;
            result = index;
        }
        ++index;
    }

    return array[result];
}

console.log('Question 6:');
console.log(findLargest(qSix.split(' ')));

//Question 7:
let qSeven = 'The quick brown fox';

// messy but whatever for now
function countVowel(string) {
    let arrayA = string.match(/A/gi);
    let arrayE = string.match(/E/gi);
    let arrayI = string.match(/I/gi);
    let arrayO = string.match(/O/gi);
    let arrayU = string.match(/U/gi);

    let result = 0;
    if(arrayA != null)
        result += arrayA.length;
    if(arrayE != null)
        result += arrayE.length;
    if(arrayI != null)
        result += arrayI.length;
    if(arrayO != null)
        result += arrayO.length;
    if(arrayU != null)
        result += arrayU.length;

    return result;
}

console.log('Question 7:');
console.log(countVowel(qSeven));

//Question 8:
let qEight = 5;

function isPrime(number) {
    if(number === 2)
        return true;
    if(number === 1 || number % 2 === 0)
        return false;

    for(let i = 3; i < number; ++i) {
        if(number % i === 0)
        return false;
    }

    return true;
}

console.log('Question 8:');
console.log(isPrime(qEight));

//Question 9:
let qNine = true;

function whatIs(arg) {
    return typeof arg;
}

console.log('Question 9:');
console.log(whatIs(qNine));

//Question 10:
let n1 = 3;
let n2 = 3;

function createRow(n) {
    let result = [];

    for(let i = 0; i < n; ++i) {
        result.push(0);
    }

    return result;
}

function identityMat(n, m) {
    let matrix = [];

    for(let i = 0; i < m; ++i) {
        let row = createRow(n);
        row[i] = 1;
        matrix.push(row);
    }

    return matrix;
}


console.log('Question 10:');
console.log(identityMat(n1, n2));

//Question 11:
const qEleven = [1, 2, 3, 4, 5];

function secondMax(array) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for(number of array) {
        if(number > largest) {
            secondLargest = largest;
            largest = number;
        }
    }

    if(secondLargest === Number.NEGATIVE_INFINITY) {
        for(number of array) {
            if(number > secondLargest && number != largest) {
                secondLargest = number;
            }
        }
    }

    return secondLargest;
}

function secondMin(array) {
    let smallest = Number.POSITIVE_INFINITY;
    let secondSmallest = Number.POSITIVE_INFINITY;

    for(number of array) {
        if(number < smallest) {
            secondSmallest = smallest;
            smallest = number;
        }
    }

    if(secondSmallest === Number.POSITIVE_INFINITY) {
        for(number of array) {
            if(number < secondSmallest && number != smallest) {
                secondSmallest = number;
            }
        }
    }


    return secondSmallest;
}

function findsecondMinMax(array) {
    let sMin = secondMin(array);
    let sMax = secondMax(array);

    console.log(sMin + ',' + sMax);
}

console.log('Question 11:');
findsecondMinMax(qEleven);

//Question 12:
const qTwelve = 6;

function getDivisors(num) {
    let result = [];

    for(let i = num; i > 1;) {
        i = Math.round(i/2); // initial
        result.push(i);
    }

    return result;
}

function sumArray(array) {
    let result = 0;

    for(number of array) {
        result += number;
    }

    return result;
}

function isPerfectNumber(num) {
    let divisors = getDivisors(num);

    if(sumArray(divisors) === num)
        return true;
    divisors.push(num);
    if(sumArray(divisors) / 2 === num)
        return true;

    // default
    return false;
}

console.log('Question 12:');
console.log(isPerfectNumber(qTwelve));

//Question 13:
let qThirteen = 18;


function getFactors (number) {
    let result = [];
    result.push(1);
    result.push(number);

    let cap = Math.floor(Math.sqrt(number));
    for(let i = 2; i <= cap; ++i) {
        if(number % i === 0) {
            result.push(i);
            result.push(number / i);
        }
    }

    return result;
}

console.log('Question 13:');
console.log(getFactors(qThirteen));

//Question 14:
const amount = 46;
const coins = [25, 10, 5, 2, 1];

function reduceCurrency(amount, coin, array) {
    let amountCoin = {
        remaining: 0,
        counts: []
    }
    let count = 0;

    while(amount >= coin) {
        amount -= coin;
        ++count;
    }

    for(i = 0; i < count; ++i) {
        array.push(coin);
    }

    amountCoin.remaining = amount;
    amountCoin.counts = array;

    return amountCoin;
}

function amountToCoins(amount, coins) {
    let result = [];

    for(count of coins) {
        let temp = reduceCurrency(amount, count, result);
        result = temp.counts;
        amount = temp.remaining;
    }

    return result;
}

console.log('Question 14:');
console.log(amountToCoins(amount, coins));

//Question 15:
const expN = 5;
const base = 4;

function exponent(b, n) {
    let result = 1;

    for(i = 0; i < n; ++i) {
        result *= b;
    }

    return result;
}

console.log('Question 15:');
console.log(exponent(base, expN));

//Question 16:
const qSixteen = "thequickbrownfoxjumpsoverthelazydog";

function extractUnique(string) {
    let result = '';

    // compare characters from our string to the result
    for(let i = 0; i < string.length; ++i) {
        let letter = string.charAt(i);
        if(result.search(letter) === -1)
            result += letter;
    }

    return result;
}

console.log("Question 16:")
console.log(extractUnique(qSixteen));

//Question 17:
const qSeventeen = "thequickbrownfoxjumpsoverthelazydog";

class letterCount {
    constructor(letter, count = 0) {
        this.letter = letter;
        this.count = count;
    }

    increment() {
        ++this.count;
    }

    print() {
        console.log("Letter: " + this.letter + ", Count: " + this.count);
    }
}

function incrementInstance(key, array) {
    for(member of array) {
        if(member.letter === key) {
            member.increment();
            return true;
        }
    }

    return false;
}

function countLetter (string) {
    // create an array of objects to store
    let countArray = [];
    // iterate through the string
    for(let i = 0; i < string.length; ++i) {
        let letter = string.charAt(i);

        // if we can't find an instance, add it
        if(!incrementInstance(letter, countArray))
            countArray.push(new letterCount(letter, 1));
    }

    printCountArray(countArray);
}

function printCountArray(array) {
    for(member of array) {
        member.print();
    }
}

console.log("Question 17:");
countLetter(qSeventeen);

//Question 18:
const qEighteen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearchLoop(array, search, beginning, ending) {
    let searchResults = -1;

    if(beginning > ending)
        return searchResults;

    let middle = Math.floor((beginning + ending) / 2);

    if (array[middle] === search) {
        return middle;
    }
    if (array[middle] > search)
        return binarySearchLoop(array, search, beginning, ending-1);
    else
        return binarySearchLoop(array, search, beginning+1, ending);
}

function binarySearch(array, search) {
    return binarySearchLoop(array, search, 0, array.length);
}

console.log("Question 18:");
console.log(binarySearch(qEighteen, 9));

//Question 19:
const qNineteen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findLarger(array, number) {
    let results = [];

    for(numbers of array) {
        if(numbers > number)
            results.push(numbers);
    }

    return results;
}

console.log("Question 19:");
console.log(findLarger(qNineteen, 4));

//Question 20:
const qTwenty = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateStringID(length, sample) {
    let result = '';
    let sampleSize = sample.length -1;

    // repeat until we have fulfilled length
    for(let i = 0; i < length; ++i) {
        result += sample.charAt(Math.random() * sampleSize);
    }

    return result;
}

console.log("Question 20:");
console.log(generateStringID(5, qTwenty));

//Question 21:
const qTwentyOne = [1, 2, 3];

function findSubsets(array, length) {
    let result = [[]];

    for(number of array) {
        let size = array.length;
        for(let i = 0; i < size; ++i) {
            result.push([...result[i], number]);
        }
    }

    return result;
}

console.log("Question 21:");
console.log(findSubsets(qTwentyOne, 2));

//Question 22:
const qTwentyTwo = 'microsoft.com';
const lTwentyTwo = 'o';

function countLetters(string, letter) {
    let result = 0;
    for(let i = 0; i < string.length; ++i) {
        if(string.charAt(i) === letter)
            ++result;
    }
    return result;
}

console.log('Question 22:');
console.log(countLetters(qTwentyTwo, lTwentyTwo));

//Question 23:
const qTwentyThree = 'abacddbec';

function findUniqueLetter(string) {
    let result = '';
    for(let i = 0; i < string.length; ++i) {
        if(checkUnique(string, string.charAt(i)) === true) {
            result = string.charAt(i);
            break;
        }
    }

    return result;
}

function checkUnique(string, letter) {
    let count = 0;

    for(let i = 0; i < string.length; ++i) {
        if(string.charAt(i) === letter)
            ++count;
    }

    if(count > 1)
        return false;
    else
        return true;
}

console.log("Question 23:");
console.log(findUniqueLetter(qTwentyThree));


//Question 24:
const qTwentyFour =  [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

function bubbleSort(array) {
    let sorted = true;
    for(let i = 0; i < array.length; ++i) {
        if(checkRight(array, i)) {
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
            sorted = false;
        }
    }

    if(sorted === true)
        return array;
    else
        return bubbleSort(array);
}

// returns boolean of whether to swap or not
function checkRight(array, index) {
    if(array.length - 1 <= index)
        return false;

    if(array[index] < array[index+1])
        return true;
    else
        return false;  
}

console.log('Question 24:');
console.log(bubbleSort(qTwentyFour));


//Question 25:
const qTwentyFive = ["Australia", "Germany", "United States of America"];

function returnLongest(array) {
    let largest = 0;
    let result = '';

    for(member of array) {
        if(member.length > largest) {
            largest = member.length;
            result = member;
        }
    }

    return result;
}

console.log("Question 25:");
console.log(returnLongest(qTwentyFive));

//Question 26:
const qTwentySix = 'australia';

function longestNoRepeat(string) {
    let stringArray = [];
    
    for(let i = 0; i < string.length; ++i) {
        let prospect = '';
        for(let j = i; j < string.length; ++j) {
            let letter = string.charAt(j);
            if(checkExist(prospect, letter)) {
                stringArray.push(prospect);
                break;
            }
            else {
                prospect += letter;
            }
        }
    }

    return returnLongest(stringArray);
}

function checkExist(string, letter) {
    let count = 0;

    for(let i = 0; i < string.length; ++i) {
        if(string.charAt(i) === letter)
            ++count;
    }

    if(count > 0)
        return true;
    else
        return false;
}

console.log('Question 26:');
console.log(longestNoRepeat(qTwentySix));

//Question 27:
const qTwentySeven = 'banana';

//i hope you don't currently care about optimization
function longestPalindrome(string) {
    let sArray = stringCombinations(string);
    let pArray = [];

    for(substring of sArray) {
        // create a new array of only palindromes
        if(palindrome(substring) === true)
            pArray.push(substring);
    }

    return returnLongest(pArray);
}

console.log('Question 27:');
console.log(longestPalindrome(qTwentySeven));

//Question 28:
const qTwentyEight = () => {
    return "Doesn't Javascript already do this?";
}

function passFunction(func) {
    let string = func();
    console.log(string);
}

console.log('Question 28:');
passFunction(qTwentyEight);

//Question 29:
function qTwentyNine() {
    getFunctionName();
    return "You shouldn't see this string";
}

function getFunctionName() {
    console.log(getFunctionName.caller.name);
}

console.log('Question 29:');
qTwentyNine();