import express from 'express'
const app = express();
import gerarPix from './feature/pix.service';
import serverless from 'serverless-http'

app.use(express.json());

app.post('/', gerarPix);
app.get('/teste', (req, res) => {
    res.send('Hello from Lambda!');
})

app.listen(3333, () => {
    console.log('run')
})

export const handler = serverless(app);
//https://aparecidadofuturo.org/checkout/order-received/12158/?key=wc_order_WNERuWAUUhS8t