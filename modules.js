const os = require('os');
console.log(os.userInfo());
console.log(`System Uptime is ${os.uptime()/3600} hours`);