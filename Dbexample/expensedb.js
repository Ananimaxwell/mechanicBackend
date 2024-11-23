const express=require('express');
const db=require('./config/expenDB');
const cors=require('cors');
const fileupload=require("express-fileupload")
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt')

const app=express();
const port=3300;

app.use(bodyParser.json());
app.use((cors()));
db.connect();


//create account funtion
app.post('/api/expense',(req,res)=>{
    const {item,amount,newdate,category}=req.body;

    //Insert user details into the customers table
    const query=`INSERT INTO dailyexpense (item,amount,date,category) VALUES ('${item}','${amount}','${newdate}','${category}')`;
    db.query(query,(err,result)=>{
        if (err){
            console.error("Error saving user details to database",err);
            res.status(500).json({error:"An eroe occur while saving details"});
        }
        else{
            console.log("User details saved successfully");
            res.status(200).json({message:'User details saved successfully'});
        }
    });

//ADDING ITEMS TO ARRAY THE DATABASE
app.post("/api/add",(req,res)=>{
    console.log("Receive the server!!")
    const list=req.body;

    if(!array.isArray(list)||list.length===0){
        return res.status(400).send({message:"Invalid Items Data"});
    }
    const query='INSERT INTO dailyexpense(item,amount,date,category) VALUES?';
    const values= list.map(item=>[item.name, item.price, new Date(item.date), item.cate]);

    db.query(query,[values],(err,result)=>{
        if(err){
            console.error('Error inserting items into database', err);
            return res.status(500).send({message:"error adding items to database", error:err})
        }
        res.status(200).send({message:"Items successfully added to database"});
    })

})    


});
app.get("/api/get",(req,res)=>{
    db.query("SELECT *FROM dailyexpense",(err,result)=>{
        if (err){
            console.log(err)
        }
        
        res.send(result);
        console.log(result);

    });

})
//January Api
app.get("/api/get/january",(req,res)=>{

    //Mapping month names to month number
    
    const quer=`SELECT *FROM dailyexpense where MONTH(date)=1`;


    db.query(quer,(err,results)=>{
        if (err){
            console.error("Error fetching january data:", err);
            res.status(500).send('server error');
            return;
        }
        res.json(results);
        
    });
});


//Febuary Api
app.get("/api/get/febuary",(req,res)=>{

    //Mapping month names to month number
    
    const quer=`SELECT *FROM dailyexpense where MONTH(date)=2`;


    db.query(quer,(err,results)=>{
        if (err){
            console.error("Error fetching febuary data:", err);
            res.status(500).send('server error');
            return;
        }
        res.json(results);
        
    });
});

//March Api
app.get("/api/get/march",(req,res)=>{

    //Mapping month names to month number
    
    const quer=`SELECT *FROM dailyexpense where MONTH(date)=3`;


    db.query(quer,(err,results)=>{
        if (err){
            console.error("Error fetching march data:", err);
            res.status(500).send('server error');
            return;
        }
        res.json(results);
    
    });
});

//April Api
app.get("/api/get/April",(req,res)=>{

    //Mapping month names to month number
    
    const quer=`SELECT *FROM dailyexpense where MONTH(date)=4`;


    db.query(quer,(err,results)=>{
        if (err){
            console.error("Error fetching April data:", err);
            res.status(500).send('server error');
            return;
        }
        res.json(results);
        console.log(quer)
    });
});

//May Api
app.get("/api/get/may",(req,res)=>{

    //Mapping month names to month number
    
    const quer=`SELECT *FROM dailyexpense where MONTH(date)=5`;


    db.query(quer,(err,results)=>{
        if (err){
            console.error("Error fetching may data:", err);
            res.status(500).send('server error');
            return;
        }
        res.json(results);
        
    });
});

//June Api
app.get("/api/get/june",(req,res)=>{

    //Mapping month names to month number
    
    const quer=`SELECT *FROM dailyexpense where MONTH(date)=6`;


    db.query(quer,(err,results)=>{
        if (err){
            console.error("Error fetching June data:", err);
            res.status(500).send('server error');
            return;
        }
        res.json(results);
        
    });
});

//July Api
app.get("/api/get/july",(req,res)=>{

    //Mapping month names to month number
    
    const quer=`SELECT *FROM dailyexpense where MONTH(date)=7`;


    db.query(quer,(err,results)=>{
        if (err){
            console.error("Error fetching data:", err);
            res.status(500).send('server error');
            return;
        }
        res.json(results);
    
    });
});

//August Api
app.get("/api/get/august",(req,res)=>{

    //Mapping month names to month number
    
    const quer=`SELECT *FROM dailyexpense where MONTH(date)=8`;


    db.query(quer,(err,results)=>{
        if (err){
            console.error("Error fetching data:", err);
            res.status(500).send('server error');
            return;
        }
        res.json(results);
        console.log(quer)
    });
});

//September Api
app.get("/api/get/september",(req,res)=>{

    //Mapping month names to month number
    
    const quer=`SELECT *FROM dailyexpense where MONTH(date)=9`;


    db.query(quer,(err,results)=>{
        if (err){
            console.error("Error fetching data:", err);
            res.status(500).send('server error');
            return;
        }
        res.json(results);
        console.log(quer)
    });
});


//October Api
app.get("/api/get/october",(req,res)=>{

    //Mapping month names to month number
    
    const quer=`SELECT *FROM dailyexpense where MONTH(date)=10`;


    db.query(quer,(err,results)=>{
        if (err){
            console.error("Error fetching data:", err);
            res.status(500).send('server error');
            return;
        }
        res.json(results);
        
    });
});

//November Api
app.get("/api/get/november",(req,res)=>{

    //Mapping month names to month number
    
    const quer=`SELECT *FROM dailyexpense where MONTH(date)=11`;


    db.query(quer,(err,results)=>{
        if (err){
            console.error("Error fetching data:", err);
            res.status(500).send('server error');
            return;
        }
        res.json(results);
        
    });
});
//December Api
app.get("/api/get/december",(req,res)=>{

    //Mapping month names to month number
    
    const quer=`SELECT *FROM dailyexpense where MONTH(date)=12`;


    db.query(quer,(err,results)=>{
        if (err){
            console.error("Error fetching data:", err);
            res.status(500).send('server error');
            return;
        }
        res.json(results);
        
    });
});




app.listen(port,()=>{
    console.log(`Server is running on http://localhost/${port}`)
})