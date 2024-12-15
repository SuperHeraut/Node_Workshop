import { createServer } from "http";
const PORT = process.env.PORT;
const USERS = [
	{ id: 1, name: "佐藤 花子" },
	{ id: 2, name: "鈴木 仁義" },
	{ id: 3, name: "田中 一郎" },
	{ id: 4, name: "木下 英吉" },
	{ id: 5, name: "山田 太郎" },
];

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
const getUserHandler = (req, res) => {
	res.write(
		JSON.stringify(
			USERS
		)
	);
	res.end();
};

const getUserByIdHandler = (req, res) => {
	const PATH = req.url.split("/");
	const ID = PATH[PATH.length - 1];
	const USER = USERS.find((USER) => USER.id === parseInt(ID));
	if (USER) {
		res.write(
			JSON.stringify(USER)
		);
	} else {
		res.statusCode = 404;
		res.write(
			JSON.stringify(
				{ message: "the user thou triest to find doeth noght exist, douche!" }
			)
		);
	}
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

const createUserHandler = (req, res) => {
	let body = "";
	//listen for any data
	req.on("data", (chunk) => {
		body += chunk.toString();
	});
	req.on("end", () => {
		const NEWUSER = JSON.parse(body);
		USERS.push(NEWUSER);
		res.statusCode = 201; //201 = successfully created
		res.write(JSON.stringify(NEWUSER));
		res.end();
	});
};

const SERVER = createServer((req, res) => {
	Logger(req, res, () => {
		JsonMW(req, res, () => {
			if (
				req.url === "/api/users" &&
				req.method === "GET"
			) {
				getUserHandler(req, res);
			} else if (
				req.url.match(/\/api\/users\/([0-9]+)/) &&
				req.method === "GET"
			) {
				getUserByIdHandler(req, res);
			} else if (
				req.url === "/api/users" &&
				req.method === "POST"
			) {
				createUserHandler(req, res);
			} else {
				notFoundHandler(req, res)
			}
		})
	});
});

SERVER.listen(PORT, () => {
	console.log(`port actif: ${PORT}`);
});