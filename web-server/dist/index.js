"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mock_1 = __importDefault(require("./mock"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "PUT", "POST"],
}));
app.use(express_1.default.json());
app.get("/assets", (req, res) => {
    const pageIndex = Number(req.query.pageIndex);
    const pageSize = Number(req.query.pageSize);
    if (!(pageIndex >= 0 && pageSize >= 0)) {
        res.status(400).json({ error: "invalid pageSize or pageIndex" });
        return;
    }
    const response = {
        total: mock_1.default.length,
        data: mock_1.default.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize),
    };
    res.json(response);
});
app.put("/assets", (req, res) => {
    const newAssets = req.body;
    for (const asset of newAssets) {
        const assetIndex = mock_1.default.findIndex((a) => a._id === asset._id);
        if (assetIndex === -1) {
            res.status(400).json({ error: "asset not found" });
            return;
        }
        mock_1.default[assetIndex] = asset;
    }
    res.json({ message: "Assets updated" });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
