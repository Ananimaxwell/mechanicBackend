const express=require('express');
const db=require('./config/db');
const cors=require('cors');
const fileupload=require("express-fileupload")
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt')
const app=express();
const jwt=require('jsonwebtoken');
const port=3300;

app.use(bodyParser.json());
app.use((cors()));
db.connect();

//Getting the list of mechanics
app.get("/api/get",(req,res)=>{
    db.query("SELECT *FROM shop",(err,result)=>{
        if (err){
            console.log(err)
        }
        
        res.send(result);
        console.log(result);

    });

})

// GETTING CAR SPRAYERS
app.get("/api/sprayer",(req,res)=>{
    db.query("SELECT *FROM shop WHERE worktype='car spraying'",(err,result)=>{
        if (err){
            console.log(err)
        }
        
        res.send(result);
        console.log(result);

    });

})





//GETTING HUNDAI CARS 
app.get("/api/car/hundaicars",(req,res)=>{
    db.query("SELECT *FROM shop WHERE expert='Hundai'",(err,result)=>{
        if (err){
            console.log(err)
        }
        
        res.send(result);
        console.log(result);

    });

})

//GETTING TOYOTA CARS
app.get("/api/car/toyotaCars",(req,res)=>{
    db.query("SELECT *FROM shop WHERE expert='Toyota'",(err,result)=>{
        if (err){
            console.log(err)
        }
        
        res.send(result);
        console.log(result);

    });

})




//create account funtion
app.post('/api/post',(req,res)=>{
    const {name}=req.params.name;
    db.query('SELECT *FROM customer WHERE username =?',[name],
        (err,results)=>{
            if (err){
                console.error('Error executing MySQL query',err);
                res.sendStatus(500)
            }else{
                if (result.length>0){
                    res.sendStatus(200)
                }else{
                    res.sendStatus(401)
                }
            }

        });
});
//Displaying mechanic profile detail
app.get('/people/:name',(req,res)=>{
    const name=req.params.name;
    db.query('SELECT *FROM mechanic m JOIN Shop s ON m.mechanic_id = s.mechanic_id WHERE s.shop_name =?',[name],(error,result)=>{
        if(error){
            console.error("Error executing query" ,error);
            res.status(500).json({error: "Failed to fetch person details"})
        }
        else{
            res.json(result);
        }
    });
});

//POSTING INTO MECHANIC ACCOUNT
app.post('/api/mechanics',(req,res)=>{
    const {name,email,password}=req.body;

    //Insert user details into the mechanic table
    const query=`INSERT INTO mechanic (name,email,password) VALUES ('${name}','${email}','${password}')`;
    db.query(query,(err,result)=>{
        if (err){
            console.error("Error saving user details into database",err);
            res.status(500).json({error:"An error occur while saving details"});
        }
        else{
            console.log("User details saved successfully");
            res.status(200).json({message:'User details saved successfully'});
        }
    });


});



//POSTING SHOP DETAILS
app.post('/api/mechanic_id',(req,res)=>{
    const {name,password,shopName,region,contact,District,
        Worktype,expert,about}=req.body;
    db.query('SELECT mechanic_id FROM mechanic WHERE name=? AND password=?',[name,password],(err,result)=>{
        if (err){
            console.error("Error retrieving mechanic_id",err);
            res.status(500).json({error:"Error retrieving mechanic_id"});
            return;
        }
        if (result.length===0) {
            res.status(404).json({error:"mechanic not found"});

        }
        res.status(200).json({mechanic_id:result[0].mechanic_id})
  

    });    

      

});
//Adding Shops

app.post('/api/addshop',(req,res)=>{
    const {mechanicId,shopName,region,contact,District,Worktype,expert,about}=req.body;
    const insertQuery='INSERT INTO shop (mechanic_id,shop_name,region,district,contact,worktype,expert,about) VALUES(?,?,?,?,?,?,?,?)';
    db.query(insertQuery,[mechanicId,shopName,region,District,contact,Worktype,expert,about],(err)=>{
        if (err) {
            console.error('Error adding shop',err);
            res.status(500).json({error:"Error adding shop"});
            return;
        }
        res.status(200).json({message:"Shop added"})
    });
});


//Editing of profiles
app.get('/individual/:id',(req,res)=>{
    const id=req.params.id;
    db.query('SELECT *FROM mechanic WHERE id=?',[id],(error,result)=>{
        if(error){
            console.error("Error executing query" ,error);
            res.status(500).json({error: "Failed to fetch person details"})
        }
        else{
            res.json(result);
        }
    });
});


app.post('/api/loadimage',(req,res)=>{
    //const image=req.files.image;
    const imageData=req.body.imageData;
    const bufferData=Buffer.from(imageData,'base64');

    db.getConnection((err,connection)=>{
        connection.release();
        if (err){
            console.error("error in connecting to database",err)
            res.status(500).json({error:"Failed to connect"});
            return;
        }
        connection.query('INSERT INTO images (image) VALUES(?)',[imageData],(err,result)=>{
        if (err){
            console.error("Error storing",err);
            res.status(500).json({error:'Error storing in database'})
        }
        
        res.status(200).json({message:"Image uploaded successfully"})
    });

    });
    
});


//submitting user details endpoint
app.post('/api/users',(req,res)=>{
    const {name,email,password}=req.body;

    //Insert user details into the customers table
    const query=`INSERT INTO customer (name,email,password) VALUES ('${name}','${email}','${password}')`;
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


});
// ACCOUNT VALIDATION

app.post('/api/login',(req,res)=>{
    const {name,password}=req.body;
    const query=`SELECT *FROM customer WHERE name='${name}' AND password='${password}'`;
    db.query(query,(err,result)=>{
        if (err){
            console.error("Error retrieving user details from the server:",error)
            res.status(500).json({error:"an error occur"})
        }
        else{
            if (result.length===0){
                res.status(401).json({error:"Invalid  username or password"})
            }
            else{
                const user= result[0];
                try{
                    const match= bcrypt.compare(password,user.password);
                    if (match){
                        res.status(200).json({message:"Login successfully"});
                        
                                     

                    }
                    else{
                         res.status(401).json({error:"Invalid username or password"});

                    }
                }
                catch(error){
                    console.error("Error comparing password:",error);
                    res.status(500).json({error:"An error occurred while logging in"});
                }
            }
        }
    })

})

app.get("/api/mechanic/book",(req,res)=>{
    const {customerid,mechanicId}=req.body;
    const insert="INSERT INTO book (customer_id,mechanic_id) VALUES(?,?)";
    db.query(insert,[customerid ,mechanicId],err=>{
        if (err){
            console.error("Error booking",error)
        }
        console.log("Book successfully")
    })
    
})

//Getting Driver ID
app.get("/api/userID",(req,res)=>{
    const {name,password}=req.body;
    db.query(`SELECT customer_id FROM customer WHERE name='Anani Maxwell' AND password='1234'`,(err,result)=>{
        if (err){
            console.log(err)
        }
        
        res.send(result);
        console.log(result);

    });

})




app.listen(port,()=>{
    console.log(`Server is running on http://localhost/${port}`)
})