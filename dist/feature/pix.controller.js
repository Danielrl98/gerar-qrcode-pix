"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function controllerPix(req) {
    const response = {
        type: '',
        key: '',
        name: '',
        city: '',
        ammount: ''
    };
    try {
        const data = req.body;
        if (!data.type)
            throw new Error('type is required');
        if (!data.key)
            throw new Error('key is required');
        if (!data.name)
            throw new Error('name is required');
        if (!data.city)
            throw new Error('city is required');
        if (!data.ammount)
            throw new Error('ammount is required');
        response.type = data.type;
        response.key = data.key;
        response.name = data.name;
        response.city = data.city;
        response.ammount = data.ammount;
    }
    catch (error) {
        const { message } = error;
        return {
            message
        };
    }
    return response;
}
exports.default = controllerPix;
//# sourceMappingURL=pix.controller.js.map