const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // Remove query strings
  const urlPath = req.url.split('?')[0];
  let filePath = path.join(DIST_DIR, urlPath);

  // If path is a directory or does not exist, check fallback
  fs.stat(filePath, (err, stats) => {
    if (err || stats.isDirectory()) {
      // If direct file doesn't exist, fallback to index.html for SPA routing
      filePath = path.join(DIST_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Cache headers
    if (urlPath.startsWith('/assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', 'no-cache');
    }

    res.setHeader('Content-Type', contentType);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');

    // Stream with gzip if accepted
    const acceptEncoding = req.headers['accept-encoding'] || '';
    const rawStream = fs.createReadStream(filePath);

    if (/\bgzip\b/.test(acceptEncoding) && (contentType.startsWith('text/') || contentType.includes('javascript') || contentType.includes('json') || contentType.includes('svg'))) {
      res.setHeader('Content-Encoding', 'gzip');
      res.writeHead(200);
      rawStream.pipe(zlib.createGzip()).pipe(res);
    } else {
      res.writeHead(200);
      rawStream.pipe(res);
    }
  });
});

server.listen(PORT, () => {
  console.log(`⚡ Production server running at http://localhost:${PORT}`);
});
