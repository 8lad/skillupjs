'use strict';
function makeFirstCapital(word) { 
    let result = word.slice(0, 1).toUpperCase() + word.slice(1);
    console.log(result);
    return result;
 };

 module.exports = makeFirstCapital;