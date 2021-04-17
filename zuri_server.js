const fetch = require('node-fetch');
const http = require('http');
const fs = require('fs')




const users = ()=> {fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(
    data =>{ 
            fs.writeFile('./users.json', JSON.stringify(data), (err)=>{
                if(err==!null){
                   console.log(err, 'err') 
                }
                console.log('data has been written into hello.txt')
            })
        }
)
}

users();
