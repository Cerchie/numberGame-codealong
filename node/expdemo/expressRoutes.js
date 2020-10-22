const express = require('express')
const app = express();

app.use(express.json)
app.use(express.urlencoded({
    extended: true
}))

app.get('/dogs', (req, res) => {
    return res.send('<h1>meow meow</h1>')
});

app.get('/dogs', (req, res) => {
    return res.send('<h1>dogs go woof woof</h1>')
});

app.get('/chickens', (req, res) => {
    res.send('bock bock bock (get req)')
})
app.post('/chickens', function createChicken(req, res) {
    res.send('you created a new chicken (not actually) (post req)')
});

const greetings = {
    en: 'hello',
    es: 'hola',
    fr: 'bonjour',
    ic: 'hallo',
    js: 'konnichiwa'
}
app.get("/greet/:language/", (req, res) => {
    const lang = req.params.language
    const greeting = greetings[lang]
    if (!greeting) {
        res.send("INVALID LANG");
    }
    return res.send(greeting) //return indicates that we're done and makes JS errs happen
});

app.get("/search", (req, res) => {
    const {
        term = 'piggies',
            sort = 'top'
    } = (req.query)
    res.send(`SEARCH PAGE, Term is ${term} and sort is ${sort}`)
});

app.get('/show-me-headers', (req, res) => {
    res.send(req.rawHeaders);
});

app.get('/show-lang', (req, res) => {
    const lang = req.headers['accept-language']
    res.send(`Your lang pref is ${lang}`)
});

app.post('/register', (req, res) => {
    res.send(`Welcome ${req.body.username}`)
})



app.listen(3000, function () {
    console.log('app on port 3000')
});