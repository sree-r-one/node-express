const {readFile,writeFile} = require('fs')

console.log('start')

// Read the first file 
// Give the encoding value here for correct reading of the file
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    // Assign this to a variable 
    const first = result

    // Read second file
    readFile('./content/second.txt','utf8',(err, result)=>{
        if (err) {
            console.log(err)
            return
        }

        // Assign to a variable
        const second = result
        // Write into the result file 
        writeFile(
            './content/result-async.txt',
            `
            Here is the result : ${first} 
            ${second}`,
            (err,result)=>{
                if (err) {
                    console.log(err)
                    return
                }
                console.log('Done with this task')
            }
        )
    })

})

console.log('starting with the next one ')

/*
start
starting with the next one 
Done with this task
*/