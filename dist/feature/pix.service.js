"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pix_controller_1 = __importDefault(require("./pix.controller"));
async function gerarPix(req, res) {
    const data = (0, pix_controller_1.default)(req);
    if (data.message)
        return res.status(400).json(data);
    const body = {
        key_type: data.type,
        key: data.key,
        city: data.city,
        amount: data.ammount,
        reference: "",
    };
    const resultAPI = await requisicao(body);
    return res.status(200).json(resultAPI);
}
exports.default = gerarPix;
async function requisicao(body) {
    const result = [];
    try {
        //https://www.gerarpix.com.br/emvqr-static
        await fetch("https://www.gerarpix.com.br/emvqr-static", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'X-Forwarded-For': '127.0.0.1'
            },
            method: "post",
            body: JSON.stringify(body)
        })
            .then(async (e) => {
            result.push({
                result: e.status
            });
        })
            .catch((message) => {
            console.error(message);
            result.push({
                message: message,
                code: 1
            });
        });
    }
    catch (error) {
        const message = error;
        result.push({
            message: message,
            code: 2
        });
    }
    return result;
}
//# sourceMappingURL=pix.service.js.map