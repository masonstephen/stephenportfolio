import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const siteUrl = 'https://stephen-mason.tech'

const projects = [
  { id: 'libticket' },
  { id: 'libai' },
  { id: 'libland' },
]

const today = new Date().toISOString().split('T')[0]

const urls = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/resume', priority: '0.8', changefreq: 'monthly' },
  ...projects.map((p) => ({
    loc: `/projects/${p.id}`,
    priority: '0.7',
    changefreq: 'monthly',
  })),
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${siteUrl}${entry.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), sitemap, 'utf8')
console.log('Generated public/sitemap.xml')
