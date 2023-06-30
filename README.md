

# Common JS và ES Modules

*Theo **mặc định**, NodeJS coi mã JavaScript là các mô-đun ***Common JS***.
Cách đơn giản để sử dụng **ES Modules** (không hỗ trợ cho Node.js v9 trở xuống) trong dự án của bạn bằng cách thêm trường `type:"module"` bên trong tệp `package.json` gần nhất ( cùng thư mục với package bạn đang tạo).*
## Cú Pháp
 

**CommonJS :**
- Sử dụng cú pháp `require()` để nhập module và `module.exports` để xuất module.

      const moduleA = require('./moduleA'); // Import module
      module.exports = moduleB; // Export module


**ES Modules**
- Sử dụng cú pháp `import` để nhập module và `export` để xuất module.

      import moduleA from  './moduleA'; // Import module
      export  default moduleB; // Export module

## Cách dùng `module.exports`:

- Xuất 1 variable, func, obj, class : (... export default)

      
      module.exports = myVariable;
      module.exports = myFunction;
      module.exports = myObj;
      module.exports = { key1: value1, key2: value2 };
      module.exports = myClass;
      

- Xuất nhiều :

      module.exports.value1 = value1;
      module.exports.value2 = value2;
      //or (2 cách như nhau)
      exports.value1 = value1;
      exports.myVariable = 'Hello';

## Cách Dùng `export` :
   

    export { name1, name2 } from  './moduleA';
    export { name3 as alias } from  './moduleB';
    //example:
    export { PI, multiply } from  './moduleB';
    export { default  as myModule } from  './moduleA';
    //
    export * from  './moduleA'; // xuất tất cả các module trong file A
    export  default myModule; // xuất mặc định (là module mặc đinh khi import)
    export  const name1 = value1;
    export  function  name2() { ... }
    export  class  name3 { ... }

## Cách dùng `import` :
- import 1 module cụ thể :
`import { module1, module2 } from  './myModule';`
- Import tất cả các tên từ một module:
`import * as myModule from  './myModule';`
Trong trường hợp này, tất cả các tên xuất từ `myModule` sẽ được gom lại thành một obj `myModule`. Truy cập các tên xuất thông qua obj `myModule`.
- Import module mặc định từ một module:
`import { default  as myDefault } from  './myModule';`
- Import một module và đổi tên gốc:
`import { module as myModule } from './myModule';`


## Cách dùng `require` :
- Require một module trong mô-đun:
`const myModule = require('./myModule').myModule;`
- Require một module:
`const myModule = require('./myModule');`
