const os = require('os')

// info about the current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(os.uptime())

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOS)