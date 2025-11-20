require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Ensure DB folder path
const dbDir = path.join(__dirname, 'db');
const fs = require('fs');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// SQLite database path
const dbPath = path.join(dbDir, 'leads.db');
const db = new Database(dbPath);

// Create table if not exists
db.prepare(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    company TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

// POST /api/leads - create lead
app.post('/api/leads', (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;
    const stmt = db.prepare(
      'INSERT INTO leads (name, email, phone, company, message) VALUES (?,?,?,?,?)'
    );
    const info = stmt.run(name, email, phone, company, message);
    res.json({ ok: true, id: info.lastInsertRowid });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: 'db_error' });
  }
});

// GET /api/leads - list leads
app.get('/api/leads', (req, res) => {
  try {
    const rows = db.prepare(
      'SELECT * FROM leads ORDER BY created_at DESC LIMIT 200'
    ).all();
    res.json({ ok: true, leads: rows });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: 'db_error' });
  }
});

// Simple health check route for Render
app.get('/health', (req, res) => {
  res.json({ ok: true, status: 'healthy' });
});

// IMPORTANT: Do NOT serve frontend here.
// Vercel will serve the React build.
// So we remove express.static(...) and app.get('*', ...)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('Server listening on', PORT);
});
