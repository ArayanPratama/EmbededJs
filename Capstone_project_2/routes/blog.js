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

export default router;
