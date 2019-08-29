"use strict";
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    console.log(flag);
    return (flag != -1);
};
console.log(mySearch('高、富、帅、德', '、')); //false
