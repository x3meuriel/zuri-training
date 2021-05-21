const bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express');
const knex = require('express');  


const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'papacy',
      database : 'records'
    }
  });

const app = express(); 
app.use(express.json())
// app.use(bodyParser.json())
app.use(cors()) 





const name = "okey"

console.log('hello');
app.get('/server', (req, res)=>{
    const {name, email, country} = req.body;
    if(!name && !email && !country){
        return res.status(400).json('incomplete data')
    }
    else{
        db.select('name', 'email','country').from('crud_app_tb').then(
            data =>{
                res.status(200).json(data[0])
            }
        )
    }
})

// app.put('http://localhost:4000', (req, res)=>{
//     const {name, email, country} = req.body;
//     if(!name && !email && !country){
//         return res.status(400).json('incomplete data')
//     }
//     else{
//     db('crud_app_tb')
//         .where('email', '=', email)
//         .update({
//          name: name,
//          email: email,
//          country: country
//         }).then(data=>{
//             try{
//                 res.status(200).json(data)
//             }
//             catch (err){
//                 res.status(400).json('unable to update, try again')
//             }
//         })
//     }
// })


// app.post('http://localhost:4000/server', (req, res)=>{
//     const {name, email, country} = req.body;
//     if(!name && !email && !country){
//         return res.status(400).json('incomplete data')
//     }
//     else{
//         db('crud_app_tb').insert({name: name, email: email, country: country}).then(
//             data=>{
//                  try{
//                      if(data){
//                           res.status(200).json(data)
//                      }
//                  }
//                  catch (err){
//                      res.status(400).json('something went wrong, try again')
//                  }  
//             }
//         )
//     }
// })

// app.delete('http://localhost:4000', (req, res)=>{
//     const {name, email, country} = req.body;
//     if(!name && !email && !country){
//         return res.status(400).json('incomplete data')
//     }
//     else{
//          db('users')
//         .where({name, email, country}, false)
//         .del()
//     }
// })



const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
  console.log(` APP is running on port ${PORT}`) 
})