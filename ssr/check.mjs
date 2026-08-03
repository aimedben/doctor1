import { readFileSync } from 'node:fs'
import path from 'node:path'

const dist = path.resolve('E:/DOCTOR/doctor1/dist')

for (const f of ['index.html', 'rendez-vous/index.html', 'admifri/index.html']) {
  const html = readFileSync(path.join(dist, f), 'utf-8')
  const opacity0 = (html.match(/opacity:\s*0/g) || []).length
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  console.log(`--- ${f} (${html.length} bytes)`)
  console.log(`  title: ${title}`)
  console.log(`  opacity:0 occurrences: ${opacity0}`)
}

const home = readFileSync(path.join(dist, 'index.html'), 'utf-8')
const checks = [
  ['H1 Dr IFRI', home.includes('<h1') && home.includes('Dr')],
  ['Actes section', home.includes('Actes & Pathologies')],
  ['Coiffe des Rotateurs', home.includes('Coiffe des Rotateurs')],
  ['Canal carpien', home.includes('canal carpien')],
  ['Hernie discale', home.includes('hernie discale')],
  ['CCAM content', home.includes('Ostéosynthèse')],
  ['CNAS/CASNOS', home.includes('CNAS')],
  ['Phone link', home.includes('tel:0778603827')],
  ['Map iframe', home.includes('openstreetmap.org')],
  ['Avis reviews', home.includes('avis')],
]
for (const [label, ok] of checks) console.log(`  ${ok ? '✓' : '✗'} ${label}`)
