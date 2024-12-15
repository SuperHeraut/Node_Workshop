import { EventEmitter } from "events";
const MYBIPPER = new EventEmitter();
function greetHandler(name) {
	console.log("hello " + name);
}
function byeHandler(name) {
	console.log("bye " + name);
}

// emit event
MYBIPPER.on("greet", greetHandler);
MYBIPPER.on("adios", byeHandler);

MYBIPPER.emit("greet", "田中");
MYBIPPER.emit("adios", "田中");

// error handle
MYBIPPER.on("error", (err) => {
	console.log(":-( the following error occured: ", err);
});

// simulate err
MYBIPPER.emit("error", new Error("ﾅﾆｶｶﾞ ｵｷﾀ"));