import gerarPix from './feature/pix.service';
import express from 'express';
const router = express.Router();

router.post('/', gerarPix);

router.get('/', (req, res) => {
    res.send('Hello from Lambda vercel!');
})

export default router
