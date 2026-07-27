import fitz
import re
import os

pdf_path = r'e:\sach\The_divine_comedy\The_divine_comedy.pdf'
doc = fitz.open(pdf_path)

def get_page_text(p_num):
    txt = doc[p_num - 1].get_text()
    lines = txt.split('\n')
    filtered = []
    for l in lines:
        s = l.strip()
        if s in ['The Inferno', 'The Purgatorio', 'The Paradiso', 'The Divine Comedy', 'The Divine Comedy:']:
            continue
        if re.match(r'^\d+$', s):
            continue
        filtered.append(l)
    return '\n'.join(filtered)

def extract_part(start_p, end_p, part_name):
    full_text = []
    for p in range(start_p, end_p + 1):
        full_text.append(get_page_text(p))
    raw = '\n'.join(full_text)
    
    canto_chunks = re.split(r'\n(?=CANTO\s+[IVXLCDM]+\b)', raw, flags=re.IGNORECASE)
    result = []
    for c in canto_chunks:
        if re.match(r'^\s*CANTO\s+[IVXLCDM]+', c, flags=re.IGNORECASE):
            result.append(c.strip())
    return result

inferno_cantos = extract_part(42, 288, 'Inferno')
purgatorio_cantos = extract_part(290, 600, 'Purgatorio')
paradiso_cantos = extract_part(605, 922, 'Paradiso')

print(f"Extracted: Inferno={len(inferno_cantos)}, Purgatorio={len(purgatorio_cantos)}, Paradiso={len(paradiso_cantos)}")

def format_canto_block(canto_raw):
    lines = canto_raw.split('\n')
    title_line = lines[0].strip()
    
    cleaned_lines = []
    for l in lines[1:]:
        l_escaped = l.replace('<', '&lt;').replace('>', '&gt;')
        cleaned_lines.append(l_escaped)
    
    content_body = '\n'.join(cleaned_lines)
    
    return f"""### {title_line}

<details>
<summary><b>Toàn Văn Nguyên Tác Thơ & Chú Giải Chi Tiết ({title_line})</b></summary>

```text
{content_body}
```

</details>
"""

def create_group_file(dest_file, title, description, cantos_group):
    blocks = []
    for c in cantos_group:
        blocks.append(format_canto_block(c))
    
    canto_content = "\n\n---\n\n".join(blocks)
    
    # Clean quotes for YAML frontmatter
    safe_title = title.replace('"', '\\"')
    safe_desc = description.replace('"', '\\"')

    mdx_code = f"""---
title: "{safe_title}"
description: "{safe_desc}"
---

import {{ Callout }} from 'fumadocs-ui/components/callout';

<Callout type="info">
**Trường ca Thần Khúc**: Mục này chứa toàn văn nguyên tác thơ Terza Rima và hệ thống chú giải chi tiết của dịch giả John Ciardi cho các Khúc thơ. Bấm vào từng thẻ bên dưới để mở rộng xem nguyên tác thơ đầy đủ.
</Callout>

## Danh Sách Các Khúc Thơ Nguyên Tác & Chú Giải

{canto_content}
"""
    with open(dest_file, 'w', encoding='utf-8') as f:
        f.write(mdx_code)

def generate_part_files(cantos_list, target_dir, prefix_title, part_slug):
    os.makedirs(target_dir, exist_ok=True)
    
    chunk_size = 5
    chunks = [cantos_list[i:i + chunk_size] for i in range(0, len(cantos_list), chunk_size)]
    
    pages = ["index"]
    
    for idx, group in enumerate(chunks):
        start_c = idx * chunk_size + 1
        end_c = start_c + len(group) - 1
        file_slug = f"0{idx+1}-canto-{start_c}-den-{end_c}"
        file_path = os.path.join(target_dir, f"{file_slug}.mdx")
        
        file_title = f"{prefix_title} - Canto {start_c} đến Canto {end_c}"
        file_desc = f"Toàn văn nguyên tác thơ Terza Rima và chú giải chi tiết từ Canto {start_c} đến {end_c}."
        
        create_group_file(file_path, file_title, file_desc, group)
        pages.append(file_slug)
        
    meta_json = {
        "title": prefix_title,
        "pages": pages
    }
    import json
    with open(os.path.join(target_dir, 'meta.json'), 'w', encoding='utf-8') as f:
        json.dump(meta_json, f, ensure_ascii=False, indent=2)

# Generate for Inferno
generate_part_files(inferno_cantos, r'e:\sach\The_divine_comedy\content\docs\phan-1-inferno-dia-nguc', 'Phần I - Inferno (Địa Ngục)', 'phan-1-inferno-dia-nguc')

# Generate for Purgatorio
generate_part_files(purgatorio_cantos, r'e:\sach\The_divine_comedy\content\docs\phan-2-purgatorio-tinh-nguc', 'Phần II - Purgatorio (Tĩnh Ngục)', 'phan-2-purgatorio-tinh-nguc')

# Generate for Paradiso
generate_part_files(paradiso_cantos, r'e:\sach\The_divine_comedy\content\docs\phan-3-paradiso-thien-duong', 'Phần III - Paradiso (Thiên Đường)', 'phan-3-paradiso-thien-duong')

print("All Canto files re-generated with safe frontmatter!")
