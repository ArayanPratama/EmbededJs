import express from 'express';

const router = express.Router();
let posts = []; // Array untuk menyimpan postingan

// Rute untuk menampilkan form pembuatan konten blog
router.get('/new', (req, res) => {
    res.render('new');
});

// Rute untuk menangani konten blog dan mengarahkan ke halaman pembuatan judul
router.post('/new', (req, res) => {
    const { content } = req.body;
    res.render('newTitle', { content });
});

// Rute untuk menangani pembuatan judul dan menyimpan postingan
router.post('/newTitle', (req, res) => {
    const { title, content } = req.body;
    const id = posts.length + 1; // Menggenerate ID sederhana untuk post
    posts.push({ id, title, content });
    res.redirect('/');
});

// Rute untuk menampilkan semua postingan di halaman beranda
router.get('/', (req, res) => {
    res.render('index', { posts });
});

// Rute untuk menampilkan form edit postingan
router.get('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.render('edit', { post });
});

// Rute untuk memproses update postingan
router.post('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).send('Post not found');
    }
    post.content = req.body.content; // Mengupdate konten
    post.title = req.body.title; // Mengupdate judul
    res.redirect('/');
});

// Rute untuk menghapus postingan
router.post('/delete/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) {
        return res.status(404).send('Post not found');
    }
    posts.splice(postIndex, 1); // Menghapus postingan dari array
    res.redirect('/');
});


export default router;
