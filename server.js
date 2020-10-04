//Budget API
const express = require('express');
const cors = require('cors');
const budget = require('./budget.json');
const app = express();
const port = 3000;


// app.use('/', express.static('public'));

//var myBudget = JSON.parse(budget);

// app.get('/hello', (req, res) => {
//     res.send('Hello World!');
//   });


app.use(cors());

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



app.get('/budget',(req,res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
  });
  