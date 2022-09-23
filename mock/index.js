let express = require('express');
let app = express();

app.get('/',function (req,res) {
    res.send(`<h1>Hello, World</h1>`)
})
app.use('/api/test/project',function(req,res){
    res.json(Mock.mock({
        'code':200,
        'data|1-9':[{
            'id|+1':1
        }]
    }))
});
app.listen(8081,function(){
    console.log('服务器已启动')
})