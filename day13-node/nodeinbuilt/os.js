var os = require('os');
console.log(os.platform())
console.log(os.freemem())
console.log(os.arch());
console.log(`${os.cpus().length} CPUs`)
console.log(`${os.uptime()} sec`)