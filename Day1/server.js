/*  Part 3: Simple Course Management Server **************
/*
Create a file named `server.js`:

1. Create an HTTP server that:
   - Serves the student data on GET /students
   - Shows total number of students on GET /stats
   - Shows courses list on GET /courses
   - Returns 404 for undefined routes

*/
// import data
const data=require('./students.json');

const http=require('http');

//  declare  server

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(data));
    }
    else if(req.url==='/stats'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(`Total number of students: ${data.length}`);
    }
    else if(req.url==='/courses'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(data.map((c)=>c.course).join(', '));
    }
    else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end('Not Found'); 
    }
  
})

// run server

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})