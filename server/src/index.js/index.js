const http = require("http");

http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    console.log(url);
})
.listen(3001, "localhost");

