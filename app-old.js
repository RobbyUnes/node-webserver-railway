
const http = require('http');


    http.createServer((req, res ) => {

       // res.setHeader('Content-Disposition', 'attachement; filename= lista.csv');


       // res.writeHead(200, {'content-Type': 'text/csv'} )

       


    res.write('Hola mundo'   );
    
    res.end();


}
)
.listen(8080);


console.log('escuchando en el puerto', 8080);