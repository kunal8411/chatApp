const express= require('express');  
// const cookieParser= require('cookie-parser');
const port =8000;
const path= require('path');
const app= express();
const http =require('http').createServer(app);
 
app.use(express.urlencoded());
// app.use(cookieParser());
const passport=require('passport');
// const db = require('./config/mongoose')
const expressLayout=require('express-ejs-layouts');
const { log } = require('console');
const { Socket } = require('dgram');
// const passportLocal= require('./config/passport-local-strategy');
app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//set up view engine
app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));  
app.set('views','./views');



app.get('/', require('./routes/index'))

http.listen(port , function(err){
    if(err){
        console.log('error on listeneing on server',port);
    }
    console.log('Server is listening on port',port);
})


// socket
const io= require('socket.io')(http);
io.on('connection' , (socket)=>{
    console.log('connected.....');
})
