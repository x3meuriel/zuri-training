

exports.eMessage = async (name, email, subject, message) =>{
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>sendmail</title>
    </head>
    <body>
        <div class="container card">
            <h1 class="card--h1" id= 'send'>
                you were contacted by ${name}
            </h1>
            <div class = "card--h1"> 
                Name: ${name}
                Email: ${email}
                subject: ${subject}
                message: ${message}
            </div>
        </div>
    </body>
    </html>
    
    <style>
        .card--h1{
            width:100%;
            background: #000;
            color: white;
            padding: 30px;
        }
        #send{
            cursor: pointer;
        }
    
        #output{
            color: green;
            box-shadow: 2px 2px 3px #ece;
        }
    
    </style>`

    return html;
}
