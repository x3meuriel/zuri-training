const fetch = require('node-fetch');
const http = require('http');
const fs = require('fs')




const posts = ()=> {fetch('https://jsonplaceholder.typicode.com/posts')
.then(resp => resp.json())
.then(
    data =>{ 
            fs.writeFile('./result/posts.json', JSON.stringify(data), (err)=>{
                if(err==!null){
                   console.log(err, 'err') 
                }
                console.log('data has been written into posts.json file')
            })
        }
)
}

posts();
