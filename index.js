let express = require('express')
let path = require('path')
let app = express()

let port = 3000;

// mock data
let mock = require('./mock_data/mock')

// routing
app.get('/rest_data', function (req, resp) {
    console.log(req.url)
    resp.send(mock);
});

// start endpoint
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port);
console.log(`Server run on ${port} port`);