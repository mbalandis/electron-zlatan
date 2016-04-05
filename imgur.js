
var imgur = require('imgur');

//var kittenPic = 'mbgq7nd';
var zlatan = 'E32RUXD';

imgur.getInfo(zlatan)
    .then(function(json) {
        console.log(json);
        document.write("<img style='width:300px;' src=" + json.data.link + "alt='zlatan'/>");
    })
    .catch(function (err) {
        console.error(err.message);
    });
