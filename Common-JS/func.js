function funcD(){
    console.log("Func Default Common-JS")
}
function func(){
    console.log("Func A Common-JS")
}
function func2(){
    console.log("Func B Common-JS")
}
let obj = {id: 1 ,whewe : "Common-JS"}
let obj2 = {id: 2, whewe : "Common-JS"}

//start block
module.exports = funcD 
module.exports.func = func
module.exports.func2 = func2
module.exports.obj = obj
exports.obj2 = obj2  // (exports === module.exports) // true
//end block  // => nếu làm như trên thì : `func`, `func2`, `obj`, `obj2` : sẽ như trở thành 1 thuộc tính cho hàm `funcD`