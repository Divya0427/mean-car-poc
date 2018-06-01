var Car = require('./models/car');

function getCars(res) {
    Car.find(function(err, cars) {
        if(err) {
            res.send(err);
        }
        res.json(cars);        
    })
}
module.exports = function (app) {   
    /*
    To add cars details in "cars" collection
    db.cars.insert([
        {
            "name": "Ford",
            "models": ["Edge", "Escape"]
        },
        {
            "name": "Acura",
            "models": ["ILX", "MDX"]
        }
    ])
    */

    /*To get the cars data*/
    app.get('/api/cars', function(req, res) {
        getCars(res);
    });

    /*Initially saving these cars data in database*/
    app.post('/api/cars', function (req, res) {
        Car.create([{
            name: 'Ford',
            models: ["Edge", "Escape"]
        },
        {
            name: 'Acura',
            models: ["ILX", "MDX"]
        }], function (err, cars) {
            if (err)
                res.send(err);
            getCars(res);
        });
    });

    /*To get car models specific to car type*/
    app.get('/api/cars/:name', function(req, res) {        
       Car.find({
        "name": req.params.name
       }, function(err, requestedCar) {
            if(err) {
                res.send(err);
            }
            res.send(requestedCar);
       })
    });
    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
