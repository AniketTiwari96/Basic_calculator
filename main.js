
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const port =3000;


app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('Wellcome to my channel');
});

app.get('/SignUp',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/calculator',(req,res)=>{
    // res.send('this is calculator page ')
    res.sendFile(__dirname+'/calcu.html');
})
app.post('/calculator',(req,res)=>{
    // res.send('thankyou for your post')
    let num1 = Number(req.body.v1)
    let num2 = Number(req.body.v2)
    let ope = req.body.operator

    let result;
    switch (ope) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
        }

    res.send(`<center style='font-size:40px;margin-top:100px;border:1px solid grey;width:20%;  margin-left: auto;margin-right: auto;box-shadow: 0px 0px 10px rgba(5, 5, 5, 5.2);text-align: center;'>this is your result = ${result}</center>`)
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
