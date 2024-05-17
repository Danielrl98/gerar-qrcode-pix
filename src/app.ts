import express from 'express'
import router from './router';

const app = express()

app.use(express.json());

app.use("/pix", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

//export const handler = serverless(app);
//https://aparecidadofuturo.org/checkout/order-received/12158/?key=wc_order_WNERuWAUUhS8t