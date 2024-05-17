"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pix_service_1 = __importDefault(require("./feature/pix.service"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', pix_service_1.default);
router.get('/', (req, res) => {
    res.send('Hello from Lambda vercel!');
});
exports.default = router;
//# sourceMappingURL=router.js.map