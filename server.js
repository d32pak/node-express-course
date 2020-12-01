const express = require('express');
const app = express();
const port = 8000;

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

app.listen(port,function(){
    console.log("Express server is running")
})