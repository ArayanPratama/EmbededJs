import express from 'express';
import blogRoutes from './routes/blog.js';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(blogRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
