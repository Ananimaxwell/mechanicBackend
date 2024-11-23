var mysql=require('mysql')
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"skyapper"
});
con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    var sql="INSERT INTO employees (id,name,age,city) VALUES ?"
    var values=[
        ['6','Ernest','24','Denu'],
        ['7','John','30','Denu'],
        ['8','Ama','22','Accra'],
        ['9','Esi','28','Kasoa']
    ];
    con.query(sql,[values],function(err,result){
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});