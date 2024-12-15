// import fs from "fs";
import fs from "fs/promises";

// // test 1 readFile callback
// fs.readFile("./test.txt", "utf8", (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

// // test 2 readfilesync
// const DATA = fs.readFileSync("./test.txt", "utf8");
// console.log(DATA);

// // test 3
// fs.readFile("./test.txt", "utf8")
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

// // test 4 promise version
const readFile = async () => {
	try {
		const DATA = await fs.readFile("./test.txt", "utf8");
		console.log(DATA)
	} catch (error) {
		console.log(error);
	}
};

// writefile
const writefile = async () => {
	try {
		await fs.writeFile("./test.txt", "this is a test.");
		console.log("file written at ");
	} catch (error) {
		console.log(error);
	}
}

//appendfile

const appendFile = async () => {
	try {
		await fs.appendFile("./test.txt", "\nthis is a new line.");
		console.log("file edited at ");
	} catch (error) {
		console.log(error);
	}
}

writefile();
appendFile();
readFile();