// Setting up express
const express = require('express');
const app = express();
const port = 8000;
// Setting body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'Successfully got users. Nice!',
		users: mockUserData
	})
})

app.get('/users/:id', function(req,res){
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'Got one user!',
        users: req.params.id
    })
})

app.post('/login', function(req,res) {
    const username=req.body.username;
    const password=req.body.password;

    const chkName="billyTheKid";
     const chkPass="superSecret";
     if(username===chkName && password===chkPass) {
        res.json({
            success: true,
            message: 'Login Success!',
            token: 'Encryption here'
        })
     } else {
         res.json({
             success: false,
             message: 'Login Failed. Want to reset credentials?'
         })
     }
})

app.listen(port,function(){
    console.log("Expressjs is running")
})