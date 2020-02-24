const express = require('express') ;

const app = express() ;

const port = 4000 ;

app.use(express.static(__dirname + '/client')) ;

app.listen(port, () => {
    console.log(`server successfully running on port ${port}`)  
}) 