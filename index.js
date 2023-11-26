const express = require('express');
const site = express();

site.get('/', function (req, res) {
    res.send("Olá mundooooo");
})
site.listen(3000, () => console.log("tudo okkkkk"))