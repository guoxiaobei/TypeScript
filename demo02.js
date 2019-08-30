// function searchXiaoJieJie(age:number):string{
//     return '找到了'+age+'岁的小姐姐'
// }
// var age:number = 18;
// var result:string = searchXiaoJieJie(age);
// console.log(result);
// var yangzi:string = '刘德华'
// //
// // function zhengXing():void{
// //     var yangzi:string = '马德华'
// //
// //     console.log('技术胖整形成了'+yangzi+'的样子')
// // }
// // zhengXing()
// // console.log(yangzi)
//技术胖整形成了马德华的样子
// 刘德华
//---------------------------------------------
// var yangzi:string = '刘德华'
//
// function zhengXing():void{
//     console.log('技术胖整形成了'+yangzi+'的样子')
//     var yangzi:string = '马德华'
//
//     console.log('技术胖整形成了'+yangzi+'的样子')
// }
// zhengXing()
// console.log(yangzi)
//技术胖整形成了undefined的样子
// 技术胖整形成了马德华的样子
// 刘德华
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(1, 4));
//
function zhengXing() {
    var yangzia = '刘德华';
    {
        var yangzib = '小沈阳';
        console.log('技术胖整形成了' + yangzib + '的样子');
    }
    console.log('技术胖整形成了' + yangzia + '的样子');
    // console.log('技术胖整形成了'+yangzib+'的样子')
}
zhengXing();
