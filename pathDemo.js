import path from "path";
import url from "url";

const FILEPATH = "./dir/subdir/file.ext"
// console.log(path.basename(FILEPATH)); //to get file name + extension
// console.log(path.dirname(FILEPATH)); //to get directory path
// console.log(path.extname(FILEPATH)); //to get only the extension
// console.log(path.parse(FILEPATH)); //to create an object with all that stuff

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__dirname, __filename);

const FILEPATH2 = path.join(__dirname, "dir", "subdir", "file.ext");
console.log(FILEPATH2);

const FILEPATH3 = path.resolve(__dirname, "dir", "subdir", "file.ext"); //this is absolute path
console.log(FILEPATH3);

