//create cars api using express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const cars = require('./cars.json');


//get all cars
app.get('/cars', cors(), (req, res) => {
    res.json(cars);
});


//get car by id
app.get('/cars/:id', cors(), (req, res) => {
    const id = req.params.id;
    const car = cars.find(car => car.id === id);
    res.json(car);
});


//update car
app.put('/cars/:id', cors(), (req, res) => {
    const id = req.params.id;
    const updatedCar = req.body;
    const index = cars.findIndex(car => car.id === id);
    cars[index] = updatedCar;
    res.json(updatedCar);
});


//delete car
app.delete('/cars/:id', cors(), (req, res) => {
    const id = req.params.id;
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    res.json({ message: `Car with id ${id} deleted` });
});


//add car
app.post('/cars', cors(), (req, res) => {
    console.log(req);
    const newCar = req.body;
    console.log(newCar);
    cars.push(newCar);
    res.json(newCar);
});


app.listen(port, () => {
    console.log('Server runnning or port ${port}');
});


//module.exports = azureFunctionHandler(app);