import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
import readFile from "fs";
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname, __filename);

const SERVER = http.createServer(async (req, res) => {
	// res.setHeader("Content-Type", "text/plain")
	// res.statusCode = 200;
	// console.log(req.url);
	// console.log(req.method);
	try {
		if (req.method === "GET") {
			let filePath;
			if (req.url === "/") {
				filePath = path.join(__dirname, "public", "index.html");
			} else if (req.url === "/about") {
				filePath = path.join(__dirname, "public", "about.html");
			} else {
				throw new Error("not found");
			}
			const DATA = await fs.readFile(filePath);
			res.setHeader("Content-Type", "text/html");
			res.write(DATA);
			res.end();
		} else {
			throw new Error("bad method")
		}
	} catch (error) {
		res.writeHead(500, { "content-type": "text/plain" })
		res.write("500 SERVER ERROR");
		res.end()
	}
});
SERVER.listen(PORT, () => {
	console.log(`port actif: ${PORT}`);
});