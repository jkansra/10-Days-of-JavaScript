'use strict';

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    var arr = [];
    let area = expressions[0];
    let perimeter = expressions[1];
    let s1 = (perimeter + Math.sqrt(((perimeter * perimeter) - (16 * area)))) / 4;
    let s2 = (perimeter - Math.sqrt(((perimeter * perimeter) - (16 * area)))) / 4;
    arr.push(s1);
    arr.push(s2);
    arr = arr.sort(function (x, y) {
        return x > y;
    });
    return arr;
}
