import fitz
import re
import os

pdf_path = r'e:\sach\The_divine_comedy\The_divine_comedy.pdf'
doc = fitz.open(pdf_path)

def clean_page_text(text):
    lines = text.split('\n')
    cleaned = []
    for line in lines:
        l = line.strip()
        # Filter out running headers and standalone page numbers
        if l in ['The Inferno', 'The Purgatorio', 'The Paradiso', 'The Divine Comedy', 'The Divine Comedy:']:
            continue
        if re.match(r'^\d+$', l):
            continue
        if re.match(r'^[A-Za-z\s]+|\s*\d+$', l) and len(l) < 5 and not l.isalpha():
            continue
        cleaned.append(line)
    return '\n'.join(cleaned)

# Locate major parts
print("Extracting full text from PDF...")

# Inferno: pages 42 to 288
# Purgatorio: pages 290 to 600
# Paradiso: pages 605 to 922

def extract_range(start_p, end_p):
    full_str = []
    for p in range(start_p, end_p + 1):
        txt = doc[p-1].get_text()
        cleaned = clean_page_text(txt)
        full_str.append(cleaned)
    return '\n'.join(full_str)

inferno_text = extract_range(42, 288)
purgatorio_text = extract_range(290, 600)
paradiso_text = extract_range(605, 922)

print(f"Inferno len: {len(inferno_text)} chars")
print(f"Purgatorio len: {len(purgatorio_text)} chars")
print(f"Paradiso len: {len(paradiso_text)} chars")
