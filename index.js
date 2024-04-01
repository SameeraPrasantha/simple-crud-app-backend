const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./Routes/product.route.js');

const app = express()

//middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRoute); 

//get request
app.get('/', (req, res) => {
    res.send('REST IN PEACE 🤓')
});


// Rename this database and put your database name here

mongoose.connect("mongodb+srv://sameeraprasantha:0I3lXYNZMYNUGmDl@backenddb.cyxkred.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log('Database Connected!')
    app.listen(3000, () => {
        console.log('Server started on port 3000')
    });

})
  .catch(err => console.log(err));