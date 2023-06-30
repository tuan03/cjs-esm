// file này đang là ES-Modules
import { func } from "./Common-JS/func.js";
import { default as D } from "./Common-JS/func.js"; // lưu ý cái này

import { func as func2 } from "./ES-Modules/func.js";
import { default as D2 } from "./ES-Modules/func.js";
func()
func2()
D()
D2()
