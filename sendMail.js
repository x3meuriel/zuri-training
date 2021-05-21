
const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const sendMail = require('./utils/emailsender')
const eMessage = require('./utils/email_template')
const fs = require('fs');

dotenv.config();
const app = express()
// app.use(express.json())
// app.use(bodyParser.urlencoded({extended: false})) 
app.use(bodyParser.json())
app.use('/', express.static(__dirname +'/views'))

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`server in port ${PORT}`) 
})

app.post('/sendUser', (req, res)=>{
    const {name, age} = req.body;
    if(!name && !age){
          console.log(name, age, req.headers['content-type'])
          res.json('no data')
    }
    else{
        console.log(name, age, req.body)
        return res.status(200).json("thanks, " + name + " you are welcome ")
    }
    
    
})

app.post('/sendmail', async (req, res)=>{
    const {name,email, subject, message} = req.body;
    try{
        if(!name && !email && !subject && !message)
             return res.json("incomplete data")
        
            await sendMail({
                name,email,subject,
                message: await eMessage(name, email, subject, message)
            })

            res.status(200).json('email sent')
    }
    catch(err){
        console.log(err);
        res.status(500).json('email not sent')
    }
} )

// app.all()


   
 
   