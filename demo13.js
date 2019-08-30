var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//继承
var Jspang = (function () {
    function Jspang(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Jspang.prototype.interest = function () {
        console.log('找小姐姐', 1);
    };
    return Jspang;
}());
var jspangObj = new Jspang('技术胖', 18, 'web');
jspangObj.interest();
// class JsShuai extends Jspang{
//     public xingxiang:string = '帅气'
//     public zhuangQian(){
//         console.log('一天赚了一个亿')
//     }
// }
//
// let shuai = new JsShuai("技术帅",5,'演讲')
// shuai.interest()
// shuai.zhuangQian()
// console.log(JsShuai)
var JsShuai = (function (_super) {
    __extends(JsShuai, _super);
    function JsShuai() {
        _super.apply(this, arguments);
        this.xingxiang = '帅气';
    }
    JsShuai.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('建立电商平台', 2);
    };
    JsShuai.prototype.zhuangQian = function () {
        console.log('一天赚了一个亿', 3);
    };
    return JsShuai;
}(Jspang));
var shuai = new JsShuai("技术帅", 5, '演讲');
shuai.interest();
shuai.zhuangQian();
