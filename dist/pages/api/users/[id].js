"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sample_data_1 = require("../../../utils/sample-data");
exports.default = (req, res) => {
    try {
        const { id } = req.query;
        const selected = sample_data_1.sampleUserData.find(data => data.id === Number(id));
        if (!selected) {
            throw new Error('Cannot find user');
        }
        res.status(200).json(selected);
    }
    catch (err) {
        res.status(404).json({ statusCode: 404, message: err.message });
    }
};
