const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const CANDIES = [{
        name: 'snickers',
        qty: 43,
        price: 1.50
    },
    {
        name: 'skittles',
        qty: 26,
        price: 0.99
    }
]

app.get('/candies', (req, res) => {
    res.json(CANDIES)
});

app.post('/candies', (req, res) => {
    if (reg.body.name.toLowerCase() === "circus peanuts"){
        res.status(400).json({msg: "HORRIBLE CHOICE. CIRCUS PNUTS FORBIDDEN"})
    }
    CANDIES.push(req.body);
    res.status((201).json(CANDIES);
});







app.listen(3000, function () {
    console.log('app on port 3000')
});