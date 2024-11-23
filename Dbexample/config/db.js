const mysql=require('mysql')
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mechanic_booking_db',
    port:4306
})
module.exports=db;