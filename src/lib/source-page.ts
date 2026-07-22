import fs from 'node:fs';
import path from 'node:path';

const sourcePath = path.join(process.cwd(), 'page.html');

function extractSection(source: string, startTag: string, endTag: string): string {
  const startIndex = source.indexOf(startTag);
  const endIndex = source.lastIndexOf(endTag);

  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    throw new Error(`Unable to extract ${startTag} from page.html`);
  }

  return source.slice(startIndex + startTag.length, endIndex);
}

export function getSourcePage() {
  const source = fs.readFileSync(sourcePath, 'utf8');

  return {
    title: /<title>(.*?)<\/title>/i.exec(source)?.[1] ?? 'Portfolio',
    styles: extractSection(source, '<style>', '</style>'),
    body: extractSection(source, '<body>', '</body>'),
    scripts: extractSection(source, '<script>', '</script>'),
  };
}