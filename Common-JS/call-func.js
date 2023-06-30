const funcMacDinh = require("./func")  // chỉ áp dụng khi file func có `module.exports = funcD` 
const func_callA = funcMacDinh.func    // require("./func").func nếu như không có `module.exports = funcD` + `funcMacDinh = require("./func")`
const func_callB = funcMacDinh.func2   // require("./func").func2 nếu như không có `module.exports = funcD` + `funcMacDinh = require("./func")`
funcMacDinh()
func_callA()
func_callB()
