const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const numbers = [1, 2, 3, 4.5, 6, 7, 8, 9, 100];
    res.render('home', { numbers: numbers })
});

app.get('/profile', (req, res) => {
    res.render('profile', { name: 'Mohammad Ali' });
});


app.listen(3000, () => {
    console.log(`Server is running with 3000 port`);
});

