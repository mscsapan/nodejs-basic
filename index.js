const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.get('/home', (req, res) => {
    res.render('home', { name: 'Mohammad Ali' });
});


app.listen(3000, () => {
    console.log(`Server is running with 3000 port`);
});

