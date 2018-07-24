exports.handler = (event, context, callback) => {
    var fs=require('fs');
    var conn = require('./connection.json');
    var mongo = require('mongodb').MongoClient
    var url = 'mongodb://'+conn.username+':'+conn.password+'@'+conn.url
    // var path=require('path')
    // var aws=require('aws-sdk')
    // var conn=JSON.parse(fs.readFileSync('connection.json','utf8'))
    // TODO implement
    mongo.connect(url, function(err, db) {
        var cursor = db.collection('praia').find();
        cursor.each(function(err, doc) {
            console.log(doc);
        });
    }); 
    callback(null,'upload at '+Date()+' for url '+url);
};