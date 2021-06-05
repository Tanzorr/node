const fs = require('fs');

const userRouteHandler = (req, res)=>{
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>Home task title</title></head>');
        res.write('<body><h1>Greating Page</h1>');
        res.write('<form action="/create-user" method="post"><input name="name" type="text"/> <button type="submit">Submit</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();

    }


    if(url === '/create-user'){
        const body = []
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk)
        })

        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString()
            let name = parseBody.split('=')[1]
            console.log(name);
        });
    }
    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>Home task title</title></head>');
        res.write('<body><h1>users lisst</h1>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('<li>User 4</li>');
        res.write('</ul>');
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }


}


module.exports = userRouteHandler;