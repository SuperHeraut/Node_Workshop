import { createServer } from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
import readFile from "fs";
import getData from "./test.js";
const PORT = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Middlewares---
const Logger = (req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
};
//---
const JsonMW = (req, res, next) => {
	res.setHeader(
		"Content-Type",
		"application/json"
	);
	next();
};
//---
const testMyTest = (req, res) => {
	res.statusCode = 200;
	let filePath;
	// console.log(__filename);
	// console.log(__dirname);
	console.log(getData());
	filePath = path.join(__dirname, "public", "index.html");
	res.end();
};

const notFoundHandler = (req, res) => {
	res.statusCode = 404;
	res.write(
		JSON.stringify(
			{ message: "the page thou triest to find doeth noght exist, douche!" }
		)
	);
	res.end();
};

const SERVER = createServer((req, res) => {
	Logger(req, res, () => {
		JsonMW(req, res, () => {
			if (
				req.url === "/" &&
				req.method === "GET"
			) {
				testMyTest(req, res);
			} else {
				notFoundHandler(req, res)
			}
		})
	});
});

SERVER.listen(PORT, () => {
	console.log(`port actif: ${PORT}`);
});