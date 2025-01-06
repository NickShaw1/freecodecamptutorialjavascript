import { capitaliseStr, capitalizeString } from "./074_exportstatement.js";
import { foo, bar } from "./074_exportstatement.js";
import subtract from "./076_exportimportdefault.js";

const cap = capitaliseStr("hello!");
const foobar = capitalizeString("Hello ") + bar + foo + "!";

console.log(cap);
console.log(foobar);

const result = subtract(8, 3);
console.log(result);
