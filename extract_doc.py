from pathlib import Path
from zipfile import ZipFile
import xml.etree.ElementTree as ET
p = Path(r'c:\Users\rajkamaa\Downloads\AI exercises\The Intelligent Telco Monetizing Data in the AI Era.docx')
print('exists', p.exists())
with ZipFile(p) as z:
    xml = z.read('word/document.xml')
root = ET.fromstring(xml)
ns = {'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
texts=[]
for para in root.findall('.//w:p', ns):
    parts=[]
    for t in para.findall('.//w:t', ns):
        parts.append(t.text or '')
    txt=''.join(parts)
    if txt.strip():
        texts.append(txt)
print('\n'.join(texts[:250]))
print('TOTAL PARAGRAPHS', len(texts))
