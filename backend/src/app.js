const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/ai', aiRoutes);

// ✅ Serve frontend build in production
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../../frontend/dist");
  app.use(express.static(frontendPath));

  // ✅ FIX for Express 5 – regex pattern for wildcard
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

module.exports = app;
