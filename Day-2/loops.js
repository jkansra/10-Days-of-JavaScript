'use strict';

/*
 * Complete the vowelsAndConsonants function.
 * Input a string and first print each vowel from that string on a separate line and then print consonants.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var str = '';
    for (var i = 0; i < s.length; i++){
        if (s.charAt(i) == 'a' || s.charAt(i) == 'e' || s.charAt(i) == 'i' || 
        s.charAt(i) == 'o' || s.charAt(i) == 'u') {
            console.log(s.charAt(i));
        } else {
            str += s.charAt(i);
        }
    }
    for (var i = 0; i < str.length; i++){
        console.log(str.charAt(i));
    }
}
