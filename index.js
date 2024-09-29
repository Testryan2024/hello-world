let $http = require("node:http");
let $my_server = $http.createServer(($_req, $_res) => {
    $_res.end($_req.headers.host);
});
$my_server.listen(8000);