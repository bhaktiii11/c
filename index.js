const http = require ("http");
const port = 1008;

const portHandler = (req,res) => {
    res.write ("<h1> server started </h1> ");
    res.end ();
};

const server = http. createServer (portHandler);

server.listen (port,( err ) => {
    err ? console.log (err) : console.log
    ("server started on port : " + port );
});