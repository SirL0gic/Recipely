const express = require('express');
const cors = require('cors'); // for cross orgin requests
const bodyParser = require('body-parser'); // for handling request body
const app = express();

app.use(cors());  // Enable CORS for all routes

app.use(bodyParser.json());  // Parse JSON request bodies

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