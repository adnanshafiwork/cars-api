const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let cars = [];

app.get('/cars', (req, res) => {
    res.json(cars);
});

app.get('/cars/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).send('The car with the given ID was not found.');
    res.json(car);
});

app.post('/cars', (req, res) => {
    const car = {
        id: cars.length + 1,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color
    };
    cars.push(car);
    res.send(car);
});

app.put('/cars/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).send('The car with the given ID was not found.');

    car.make = req.body.make;
    car.model = req.body.model;
    car.year = req.body.year;
    car.color = req.body.color;
    res.send(car);
});

app.delete('/cars/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).send('The car with the given ID was not found.');

    const index = cars.indexOf(car);
    cars.splice(index, 1);
    res.json({ message: 'Car data deleted successfully.' });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
