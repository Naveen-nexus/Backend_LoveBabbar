const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//how to create a route 

app.get('/', (req, res) => {
    res.send("hello , kaise ho");
}) 

//post request

app.post('/api/cars', (request, response) => {
    const {name , brand}= request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted successfully");
});