//Budget API
const express = require('express');
const mongoose = require('mongoose');
const budgetItemsModel = require('./models/budget_schema');
// const cors = require('cors');
// const budget = require('./budget.json');

const bodyParser = require('body-parser');

const app = express();
const port = 3000;


const url = 'mongodb://localhost:27017/budget_items';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));

let multer = require('multer');
let upload = multer();


//var myBudget = JSON.parse(budget);

// app.get('/hello', (req, res) => {
//     res.send('Hello World!');
//   });


// app.use(cors());
app.use(express.json());

// const budget = {
//   myBudget: [
//       {
//           title: 'Eat out',
//           budget: 25
//       },
//       {
//           title: 'Rent',
//           budget: 275
//       },
//       {
//           title: 'Grocery',
//           budget: 110
//       },
//   ]
// };


// app.get('/budget', (req, res) => {
//     mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => {
//             budgetItemsModel.find({})
//                 .then((data) => {
//                     res.json(data);
//                     mongoose.connection.close();
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// });

// app.post('/budget', (req, res) => {
//     mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => {
//             var budgetItem = new budgetItemsModel({
//                 title: req.body.title,
//                 value: req.body.value,
//                 color: req.body.color
//             });

//             budgetItemsModel.insertMany(budgetItem)
//                 .then((data) => {
//                     res.json(data);
//                     mongoose.connection.close();
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// });

app.post("/budget",upload.array(), (req, response)=> {
    let newData={
        "title": req.body.title,
        "value": req.body.budget,
        "color": req.body.color
        };

    mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log("Connected to database to Insert data from Post man")
             // Insert operation
             budgetItemsModel.insertMany(newData)
                .then((data)=>{
                    
                    response.send("Data insert successful");
                    mongoose.connection.close()
                })
                .catch((connectionError)=>{
                    console.log(connectionError)
                })
        })
        .catch((connectionError)=>{
            console.log(connectionError)
        })
});

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log("Connected to database")
           // List all entries
           budgetItemsModel.find({})
                    .then((data)=>{
                        app.get('/budget',(req,res)=>{
                            res.json(data);
                            mongoose.connection.close()
                        });
                        
                    })
                    .catch((connectionError)=>{
                        console.log(connectionError)
                    })
        })
        .catch((connectionError)=>{
            console.log(connectionError)
        })
app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
  });
 