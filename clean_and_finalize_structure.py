import os, json

old_files = [
    r'e:\sach\The_divine_comedy\content\docs\phan-1-inferno-dia-nguc\01-canto-1-nua-doi-giao-lo.mdx',
    r'e:\sach\The_divine_comedy\content\docs\phan-1-inferno-dia-nguc\02-canto-2-3-cong-dia-nguc.mdx',
    r'e:\sach\The_divine_comedy\content\docs\phan-1-inferno-dia-nguc\03-tang-1-5-limbo-duc-vong-phan-no.mdx',
    r'e:\sach\The_divine_comedy\content\docs\phan-1-inferno-dia-nguc\04-tang-6-7-thanh-dis-va-bao-luc.mdx',
    r'e:\sach\The_divine_comedy\content\docs\phan-1-inferno-dia-nguc\04-tang-6-9-thanh-dis-gian-tra-lucifer.mdx',
    r'e:\sach\The_divine_comedy\content\docs\phan-1-inferno-dia-nguc\05-tang-8-10-hao-da-malebolge.mdx',
    r'e:\sach\The_divine_comedy\content\docs\phan-1-inferno-dia-nguc\06-tang-9-ho-bang-cocytus-lucifer.mdx',

    r'e:\sach\The_divine_comedy\content\docs\phan-2-purgatorio-tinh-nguc\01-7-tang-sam-hoi.mdx',
    r'e:\sach\The_divine_comedy\content\docs\phan-2-purgatorio-tinh-nguc\01-bo-bien-va-tien-tinh-nguc.mdx',
    r'e:\sach\The_divine_comedy\content\docs\phan-2-purgatorio-tinh-nguc\02-dia-bang-va-beatrice.mdx',

    r'e:\sach\The_divine_comedy\content\docs\phan-3-paradiso-thien-duong\01-cac-tang-hanh-tinh.mdx',
    r'e:\sach\The_divine_comedy\content\docs\phan-3-paradiso-thien-duong\02-coi-empyrean-anh-sang.mdx',
    r'e:\sach\The_divine_comedy\content\docs\phan-3-paradiso-thien-duong\02-sao-co-dinh-va-primum-mobile.mdx',
]

for f in old_files:
    if os.path.exists(f):
        os.remove(f)
        print(f"Removed old file: {f}")

print("Clean up finished.")
