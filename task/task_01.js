'use strict';

function reversString(str) { 
    let str2 = str.split('')
                    .sort(()=> -Infinity)
                    .join('');
    console.log(str2);
    return str2;

 }

module.exports = reversString;