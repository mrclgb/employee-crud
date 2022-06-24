const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Employee = require("./model/Employee");

mongoose.connect("mongodb://localhost:27017/employee");

mongoose.connection.once('open', () => {
    console.log("Mongodb connection established successfully");
});

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('crud/build'));
}

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});

app.get('/', (req, res) => {
    Employee.find((err, emp) => {
        if (err) {
            console.log(err);
        } else {
            res.json(emp);
        }
    })
});

app.post('/create', (req, res) => {
    const emp = new Employee(req.body);
    emp.save().then(emp => {
        res.json(emp);
    }).catch(err => res.status(500).send(err.message));
});

app.get('/:id', (req,res) => {
    const id = req.params.id;
    Employee.findById(id, (err, emp) => {
        res.json(emp);
    });
});

app.post('/edit/:id', (req,res) => {
    const id = req.params.id;
    Employee.findById(id, (err, emp) => {
        if (!emp) {
            res.status(404).send("Employee not found");
        } else {
            emp.firstname = req.body.firstname;
            emp.lastname = req.body.lastname;
            emp.emp_id = req.body.emp_id;
            emp.phone = req.body.phone;

            emp.save().then(emp => res.json(emp)).catch(err => res.status(500).send(err.message));
        }
    });
});

app.delete('/delete/:id', (req,res) => {
    const id = req.params.id;
    Employee.findByIdAndDelete(id, (err, emp) => {
        if(err){
            res.status(404).send("Employee not found");
        } else {
            res.json(emp);
        }
    });
});
