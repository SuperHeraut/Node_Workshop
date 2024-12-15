// console.log(process.argv[3]);

console.log(process.env.USERNAME);

console.log(process.pid);

console.log(process.cwd());

console.log(process.title);

console.log(process.memoryUsage());

console.log(process.uptime());

process.on("exit", (code) => {
	console.log(`about to exit with code: ${code}`);
}) // does show up because it was loaded before exit, and triggered by exit

process.exit(0);

console.log("hello from after exit"); //doesn't show up since the process was exit before reaching here.