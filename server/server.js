const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/test', (req, res) => {
  const data = req.body; //the request coming in from the front end
  console.log(data);  // Log the data to the console

  // Do something with the data here, such as saving it to a database

  res.send({ message: 'Data received' });  // Send a response back to the frontend
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
