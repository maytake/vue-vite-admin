const { login, getInfo, getRoutes } = require('./data')
let express = require('express');
let app = express();

app.get('/api/user', function (req, res) {
    res.json(login);
})
app.post('/api/login', function (req, res) {
    res.json(login);
})
app.get('/api/getInfo', function (req, res) {
    res.json(getInfo);
})
app.get('/api/getRouters', function (req, res) {
    res.json(getRoutes);
})

app.listen(8081, function () {
    console.log('服务器已启动')
})
