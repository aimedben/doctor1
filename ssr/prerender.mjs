import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const template = readFileSync(path.join(distDir, 'index.html'), 'utf-8')

const { render } = await import('../dist-ssr/entry.js')

const routes = [
  {
    path: '/',
    out: 'index.html',
    title: 'Dr IFRI | Chirurgien Orthopédiste Traumatologue à Seddouk, Béjaïa',
    description: 'Dr IFRI - Chirurgien Orthopédiste Traumatologue à Seddouk, Béjaïa. Chirurgie orthopédique, traitement des kystes, circoncision, radiologie numérique. Conventionné CNAS/CASNOS. Prenez rendez-vous au 0778 60 38 27.',
    robots: 'index, follow',
  },
  {
    path: '/rendez-vous',
    out: 'rendez-vous/index.html',
    title: 'Prendre rendez-vous | Dr IFRI à Seddouk, Béjaïa',
    description: 'Prenez rendez-vous en ligne avec le Dr IFRI, chirurgien orthopédiste à Seddouk, Béjaïa. Consultation, circoncision, traitement des kystes. Ou appelez le 0778 60 38 27.',
    robots: 'index, follow',
  },
  {
    path: '/admifri',
    out: 'admifri/index.html',
    title: 'Espace Dr IFRI | Gestion des rendez-vous',
    description: 'Espace administrateur du Dr IFRI.',
    robots: 'noindex, nofollow',
  },
  {
    path: '/privacy',
    out: 'privacy/index.html',
    title: 'Politique de confidentialité | Dr IFRI à Seddouk, Béjaïa',
    description: 'Politique de confidentialité du Cabinet du Docteur IFRI, chirurgien orthopédiste traumatologue à Seddouk, Béjaïa. Protection de vos données personnelles.',
    robots: 'index, follow',
  },
]

for (const route of routes) {
  const body = render(route.path)
  const page = template
    .replace(/<title>.*<\/title>/, `<title>${route.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${route.description}$2`)
    .replace(/(<meta name="robots" content=")[^"]*(")/, `$1${route.robots}$2`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

  const outPath = path.join(distDir, route.out)
  mkdirSync(path.dirname(outPath), { recursive: true })
  writeFileSync(outPath, page, 'utf-8')
  console.log(`Prerendered ${route.path} -> ${route.out} (${page.length} bytes)`)
}
