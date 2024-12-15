// const RandomNum = require("./utils");
// console.log(`${RandomNum()}`);

import getPosts, { getPostsLength } from "./postController.js";

console.log(`${getPostsLength()}`);
console.log(getPosts()[0].title);