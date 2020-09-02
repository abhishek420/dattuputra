const { count } = require('console');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { name: "Company Inc", address: "Highway 37" },
        { name: "Bibox", address: "Electromic city" },
        { name: "Petzz.org", address: "Iim Bangalore" },
        { name: "Genpact Digital", address: "Bellandur" },
    ];
    dbo.collection("customers").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("No of documents inserted!" + res.insertedCount);
        db.close();
    });
});