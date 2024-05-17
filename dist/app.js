"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const pix_service_1 = __importDefault(require("./feature/pix.service"));
const serverless_http_1 = __importDefault(require("serverless-http"));
app.use(express_1.default.json());
app.post('/', pix_service_1.default);
app.get('/teste', (req, res) => {
    res.send('Hello from Lambda!');
});
app.listen(8000);
exports.handler = (0, serverless_http_1.default)(app);
//https://aparecidadofuturo.org/checkout/order-received/12158/?key=wc_order_WNERuWAUUhS8t
//# sourceMappingURL=app.js.map