import cors from "cors";
import express, { Request, Response } from "express";
import mock from "./mock";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT", "POST"],
  }),
);

app.use(express.json());

app.get("/assets", (req: Request, res: Response) => {
  const pageIndex = Number(req.query.pageIndex);
  const pageSize = Number(req.query.pageSize);
  if (!(pageIndex >= 0 && pageSize >= 0)) {
    res.status(400).json({ error: "invalid pageSize or pageIndex" });
    return;
  }

  const response = {
    total: mock.length,
    data: mock.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize),
  };
  res.json(response);
});

app.put("/assets", (req: Request, res: Response) => {
  const newAssets = req.body;

  for (const asset of newAssets) {
    const assetIndex = mock.findIndex((a) => a._id === asset._id);

    if (assetIndex === -1) {
      res.status(400).json({ error: "asset not found" });
      return;
    }

    mock[assetIndex] = asset;
  }
  res.json({ message: "Assets updated" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
