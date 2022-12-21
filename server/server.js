const express = require('express');
const cors = require('cors'); // for cross orgin requests
const bodyParser = require('body-parser'); // for handling request body
const MongoClient = require('mongodb').MongoClient;

const dotenv = require('dotenv'); //for env variables

dotenv.config();


const app = express();

app.use(cors());  // Enable CORS for all routes

app.use(bodyParser.json());  // Parse JSON request bodies


const url = process.env.MONGODB_URI; //from .env

app.get('/test-connection', (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error connecting to database');
      return;
    }

    const db = client.db('testdb');
    const collection = db.collection('testcol');

    // Perform an operation on the collection, such as finding all documents
    collection.find({}).toArray((err, documents) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error performing operation on collection');
        return;
      }

      // Return the result to the client
      res.send(documents);
      client.close();
    });

    const user = {
       name: "John",
        age: 25 
      };

      const recipeData = {
        recipe_name: title,
        recipe_author: author,
        recipe_ingredients: ingredients,
        recipe_directions: steps,
        recipe_image: picture,
      };
      
    // Insert the new document into the "users" collection
    collection.insertOne(user, function(err, res) {
      console.log("Document inserted");
      client.close();
    });
  });
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.post('/test', (req, res) => {
  const data = req.body; //the request coming in from the front end
  // console.log(data);  // Log the data to the console

  // Do something with the data here, such as saving it to a database
  console.log("this is the data",data);

  res.send({ message: 'Data received' });  // Send a response back to the frontend
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});



// Alternatively, you can specify a specific origin or list of origins to allow by passing an options object to the cors() function. For example:

// app.use(cors({ origin: 'http://localhost:3000' }));  // Allow requests from localhost:3000


// ccess to XMLHttpRequest at 'http://localhost:8000/test' from origin 'http://localhost:3000' has been blocked by 
// CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

// It looks like you are experiencing a CORS (Cross-Origin Resource Sharing) error. This error 
// occurs when a web browser blocks a request made by a script running on one origin (website) to a resource on a different origin.