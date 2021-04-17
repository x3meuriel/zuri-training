const fetch = require('node-fetch');
const http = require('http');
const fs = require('fs')


fs.readFile('./hello.txt', 'utf-8', (err, data)=>{
    console.log(data);
})


const post = ()=> {fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(
    data =>{ 
            fs.writeFileSync('./hello.txt', JSON.stringify(data), (err)=>{
                console.log(err)
            })
        }
)
}

post();
