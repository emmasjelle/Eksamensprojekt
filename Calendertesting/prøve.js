var vowels = ['a','e','i','o','u'];

function removeVowels(string) {
    var string2 = string.replace(/a/,'');
    var string3 = string2.replace(/e/,'');
    var string4 = string3.replace(/i/,'');
    var string5 = string4.replace(/o/,'');
    var string6 = string5.replace(/u/,'');
    console.log(string6);
    }
removeVowels("Hello World");
