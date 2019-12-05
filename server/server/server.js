const express = require('express');
const bodyParser = require('body-parser');
// const db = require('../db/db');
const path = require('path')
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.post('/test', (req, res) => {
    let reqItem = req.body.selectedItemId;
    console.log(reqItem);
    let data = {
                    id: 91, 
                    productName: "Billy Club", 
                    price: 24.99, 
                    links: "LINK", 
                    sku: "12-011", 
                    model: 9224, 
                    onHand: 7
                }
    res.send(data);
    res.end();
});

// app.get('/getAllProducts', (req, res) => {
//     db.getAllProducts()
//     .then((data) => {
//         res.send(data);
//         res.end();
//     })
//     .catch((err) => {
//         res.send(err);
//         res.end();
//     })
// });

// app.post('/getSingleProduct', (req, res) => {
//     let reqItem = req.body.selectedItemId;
//     // console.log(reqItem);
//     // res.send(reqItem);
//     // res.end();

//     db.getSingleProduct(reqItem)
//     .then((data) => {
//         res.send(data);
//         res.end();
//     })
//     .catch((err) => {
//         res.send(err);
//         res.end();
//     })
// })

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
