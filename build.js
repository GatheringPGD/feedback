// Injects Vercel env vars into the static page at build time.
const fs = require('fs');
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_PUBLISHABLE_KEY;
if (!url || !key) {
  console.error('SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY are required');
  process.exit(1);
}
fs.mkdirSync('dist', { recursive: true });
const html = fs.readFileSync('index.html', 'utf8')
  .replace('__SUPABASE_URL__', url)
  .replace('__SUPABASE_PUBLISHABLE_KEY__', key);
fs.writeFileSync('dist/index.html', html);
