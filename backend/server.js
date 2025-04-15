import express from 'express';
import products from './data/products.js';
const port = 5000; // Port number for the server
const app = express(); // Create an instance of the Express application

app.get('/', (req, res) => { 
    res.send('Hello World!'); // Send a response to the client  
});

app.get('/api/products', (req, res) => { 
    res.json(products); // Send the products data as JSON response

}); 
app.get('/api/products/:id', (req, res) => { 
    const product = products.find((p) => p._id === req.params.id); // Find the product by ID
    res.json(product); // Send the product data as JSON response
}); // Define a route for the root URL

app.listen(port, () => console.log(`Server is running on port ${port}`)); // Start the server and listen on the specified port
