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

app.get('/users/:id', function(req,res){
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'Got one user!',
        users: req.params.id
    })
})

app.listen(port,function(){
    console.log("Expressjs is running")
})