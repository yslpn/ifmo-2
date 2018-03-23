(function self() { return require("fs").readFile(process.argv[1], (code) => console.log(self.toString())); })();
