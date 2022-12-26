// Importing node modules
const express = require('express'); // To use express
const cors = require('cors'); // for cross orgin requests
const bodyParser = require('body-parser'); // for handling request body
const MongoClient = require('mongodb').MongoClient;

// Env variables such as passwords
const dotenv = require('dotenv'); 
dotenv.config();


const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(bodyParser.json());  

//The password for mongo db is retrieved from the .env file
const url = process.env.MONGODB_URI; 

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
      // client.close(); do not close
    });

    const user = {
       name: "mike",
        age: 26 
      };

      var title = "test";
      var author= "test";
      var ingredients= "test";
      var steps= "test";
      var picture= "test";

      const recipeData = {
        recipe_name: title,
        recipe_author: author,
        recipe_ingredients: ingredients,
        recipe_directions: steps,
        recipe_image: picture
      };
      
    // Insert the new document into the "users" collection
    collection.insertOne(recipeData, function(err, res) {
      console.log("Document inserted");
      console.log(res);
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

app.post('/send-recipe-data',(req,res) => {
  
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