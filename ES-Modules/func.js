function funcD(){
    console.log("Func Default ES_Modules")
}
export function func(){
    console.log("Func A ES_Modules")
}
export function func2(){
    console.log("Func B ES_Modules")
}
let obj = {id: 1 ,whewe : "ES_Modules"}
let obj2 = {id: 2, whewe : "ES_Modules"}

export const efunc = func
export default funcD // module này sẽ có tên dafault khi import, nhưng buộc phải dùng alias
