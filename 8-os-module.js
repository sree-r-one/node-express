const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// Uptime 
console.log(`The system uptime is ${os.uptime()/3600} hours`)

