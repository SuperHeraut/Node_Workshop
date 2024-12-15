import url from "url";
const URLSTRING = "https://duckduckgo.com/?q=test"
const URLOBJ = new URL(URLSTRING);
console.log(URLOBJ);

console.log(url.format(URLOBJ));

console.log(import.meta.url);

console.log(url.fileURLToPath(import.meta.url));

console.log(URLOBJ.search);

const PARAMS = new URLSearchParams(URLOBJ.search);
console.log(PARAMS);
PARAMS.append("limit", "sky");
PARAMS.delete("q");
console.log(PARAMS);
