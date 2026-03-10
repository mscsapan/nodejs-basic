import express from 'express';
import profileRoutes from './routes/profile-routes.js';

const app = express();

app.set('view engine', 'ejs')

app.use(profileRoutes);


app.listen(3000, () => {
    console.log(`Server is running with 3000 port`);
});