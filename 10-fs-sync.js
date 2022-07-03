const {readFileSync,writeFileSync} = require('fs')

console.log('Starting process')

// Reading the 2 files 
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// Writing the 2 files 
writeFileSync(
    './content/result-sync.txt',
    `
    Here is the result from Sync operation : ${first} ${second}`,
    {flag : 'a'}
)

// Logging the messages
console.log('Done with this task')
console.log('Starting with the next one')
