interface  SearchMan{
    (source:string,subString:string):boolean
}

let mySearch:SearchMan;

mySearch = function(source:string,subString:string):boolean{
    let flag =source.search(subString);
    console.log(flag);
    return (flag != -1)
};

console.log(mySearch('高、富、帅、德','、')); //false