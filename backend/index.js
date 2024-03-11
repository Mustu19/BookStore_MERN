import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
// import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js' ;
import cors from 'cors' ;

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
// option1: allow all origins with default of cors
app.use(cors())
// option2: allow custom origins
// app.use(
//     cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST' , 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// })
// );

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to my Book Store")
});

app.use("/books" , booksRoute) ;

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App Connected to Database');
        app.listen(PORT, () => {
            console.log(`listening on port: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })




