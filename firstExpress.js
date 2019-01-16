const express = require('express');
// console.log(express)
const app = express();
// const port = process.argv[2]

app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.send("<H1>Hello World</H1>");
});
app.get('/class',(req, res)=>{
    res.send("<p>Hello, class!</p>")
})

app.listen(3000);