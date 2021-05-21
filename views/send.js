

let user = {
    name: "okey",
    age: "27"}

const url = 'http://localhost:4000/senduser'
const request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: new Headers({"Content-Type": "application/json;charset=UTF-8"})

})
const send = document.getElementById('send')
let output = document.getElementById('output') 
send.addEventListener('click', (event)=>{
event.preventDefault()
fetch(request)
 .then(data=> data.json())
 .then(resp=>{output.innerHTML = resp})
 request.body = ''
})