'use strict';

function getMaxLessThanK(n,k) {
    var max = 0;
    for (var i = n; i > 0; i--){
        for (var j = i - 1; j > 0; j--){
            if ((i & j) < k && (i & j) > max)
                max = i & j;
        }
    }
    return max;
}
