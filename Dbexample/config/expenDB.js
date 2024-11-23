const mysql=require('mysql')
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'expenses_db',
    port:4306
})
module.exports=db;