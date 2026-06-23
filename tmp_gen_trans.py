from pathlib import Path
import re, json, urllib.parse, urllib.request

base = Path(r'c:\NEHA\2026\Payltr\my-app')
utils_dir = base / 'utils'

skip_exact = {'react-icons/lu','react-icons/tb','react-icons/fa','react-icons/bs','react-icons/tb','react-icons/tb','react-icons/lu','react-icons'}

def is_content(s: str) -> bool:
    s = s.strip()
    if not s:
        return False
    if s in skip_exact:
        return False
    if s.startswith('/'):
        return False
    if s.startswith('react-icons/'):
        return False
    if s.endswith('px'):
        return False
    if s.startswith('#'):
        return False
    if s in {'blue','purple','col-span-1','M','S','1','2','3','4'}:
        return False
    if '@' in s:
        return False
    if re.fullmatch(r'[0-9+\-\s().,%:]+', s):
        return False
    return True

strings = []
for f in utils_dir.glob('*.js'):
    text = f.read_text(encoding='utf-8')
    # double and single quoted strings
    for m in re.finditer(r'"([^"\\]*(?:\\.[^"\\]*)*)"', text):
        strings.append(bytes(m.group(1), 'utf-8').decode('unicode_escape'))
    for m in re.finditer(r"'([^'\\]*(?:\\.[^'\\]*)*)'", text):
        strings.append(bytes(m.group(1), 'utf-8').decode('unicode_escape'))

uniq=[]; seen=set()
for s in strings:
    s=s.strip()
    if s in seen:
        continue
    seen.add(s)
    if is_content(s):
        uniq.append(s)


def tr(q, tl):
    url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=' + tl + '&dt=t&q=' + urllib.parse.quote(q)
    with urllib.request.urlopen(url, timeout=20) as r:
        data = json.loads(r.read().decode('utf-8'))
    out = ''.join(part[0] for part in data[0] if part and part[0])
    return out or q

nl = {}
fr = {}
for s in uniq:
    try:
        nl[s] = tr(s, 'nl')
    except Exception:
        nl[s] = s
    try:
        fr[s] = tr(s, 'fr')
    except Exception:
        fr[s] = s

out = base / 'lib' / 'generatedUtilTranslations.js'
out.write_text(
    'export const utilNlTranslations = ' + json.dumps(nl, ensure_ascii=False, indent=2) + ';\n\n' +
    'export const utilFrTranslations = ' + json.dumps(fr, ensure_ascii=False, indent=2) + ';\n',
    encoding='utf-8'
)
print('generated', len(uniq))
