import express from 'express' ;
import { PORT , mongoDBURL } from './config.js';
import mongoose from 'mongoose';

const app = express() ;

app.get("/" , (request , response) => {
    console.log(request);
    return response.status(234).send("Welcome to my Book Store")
});

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('App Connected to Database');
    app.listen(PORT,  () => {
        console.log(`listening on port: ${PORT}`);
    })
})
.catch((error) => {
    console.log(error);
}) 


