import express from "express";

const routes = express.Router();

routes.get('/', (req, res) => {
    const numbers = [1, 2, 3, 4.5, 6, 7, 8, 9, 100];
    res.render('home', { numbers: numbers })
});

routes.get('/profile', (req, res) => {
    res.render('profile', { name: 'Mohammad Ali' });
});

export default routes;