import express from 'express'
const app = express();
import gerarPix from './feature/pix.service';
import serverless from 'serverless-http'

app.use(express.json());

app.post('/', gerarPix);
app.get('/', (req, res) => {
    res.send('Hello from Lambda vercel!');
})

app.listen(3333, '0.0.0.0', () => {
    console.log('run')
})

export const handler = serverless(app);
//https://aparecidadofuturo.org/checkout/order-received/12158/?key=wc_order_WNERuWAUUhS8t