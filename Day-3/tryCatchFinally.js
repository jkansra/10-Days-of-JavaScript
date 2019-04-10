'use strict';

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        var arr = s.split('');
        arr = arr.reverse();
        s = arr.join('');
    }
    catch(e){
        console.log(e.message);
    }
    finally{
        console.log(s);
    }
}
