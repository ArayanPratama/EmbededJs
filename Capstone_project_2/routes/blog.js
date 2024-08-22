import { Router } from 'express';

const router = Router();
let posts = [];

router.get('/', (req, res) => {
    res.render('index', { posts });
});

router.get('/new', (req, res) => {
    res.render('new');
});

router.post('/new', (req, res) => {
    const newPost = { id: Date.now().toString(), content: req.body.content };
    posts.push(newPost);
    res.redirect('/');
});

router.get('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    res.render('edit', { post });
});

router.post('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id === req.params.id);
    post.content = req.body.content;
    res.redirect('/');
});

router.post('/delete/:id', (req, res) => {
    posts = posts.filter(p => p.id !== req.params.id);
    res.redirect('/');
});

export default router;
