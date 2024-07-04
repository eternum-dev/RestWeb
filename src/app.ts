import fs from 'fs';
import http from 'http';





const server = http.createServer((request, response) => {

    console.log(request.url);

    // response.writeHead(200, { 'Content-Type': 'text/html' })
    // response.write('<h1>Hola mundo desde el el servidor</h1>');
    // response.end();

    // const data = { name: 'Alejandro thon', age: '28', city: 'Valdivia' };

    // response.writeHead(200, { 'Content-Type': 'application/json' });
    // response.end(JSON.stringify(data));

    if (request.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(htmlFile);

        return;
    }
    if (request.url?.endsWith('.js')) {
        response.writeHead(200, { 'Content-Type': 'application/javascript' });
    } else if (request.url?.endsWith('.css')) {
        response.writeHead(200, { 'Content-Type': 'text/css' });
    }
    const responseContent = fs.readFileSync(`./public${request.url}`, 'utf-8');
    response.end(responseContent); 
 
});

server.listen(8080, () => {
    console.log('Server runnig on port 8080');
}) 