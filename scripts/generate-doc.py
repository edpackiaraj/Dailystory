import os
import zipfile
import html
import re

MD_PATH = r"C:\Users\edpac\.gemini\antigravity\brain\07e28bd8-7658-4056-84bc-5e3545413a42\educational_psychology_and_school_implementation_paper.md"
PUBLIC_DOCS = r"c:\Users\edpac\OneDrive\Documents\antigravity\Story Blog\public\docs"
ARTIFACT_DIR = r"C:\Users\edpac\.gemini\antigravity\brain\07e28bd8-7658-4056-84bc-5e3545413a42"

with open(MD_PATH, "r", encoding="utf-8") as f:
    md_content = f.read()

# 1. GENERATE WORD COMPATIBLE .DOC (HTML Word Document with Office XML & UTF-8 BOM)
# This format opens seamlessly in Microsoft Word, LibreOffice Writer, and Google Docs with rich formatting, styling, and tables.

def md_to_html_body(md):
    lines = md.split("\n")
    html_lines = []
    in_table = False
    table_rows = []
    in_code = False
    
    for line in lines:
        stripped = line.strip()
        if stripped.startswith("```"):
            in_code = not in_code
            continue
        if in_code:
            continue
            
        if stripped.startswith("|") and stripped.endswith("|"):
            if "---" in stripped:
                continue
            cells = [c.strip() for c in stripped.split("|")[1:-1]]
            if not in_table:
                in_table = True
                table_rows = []
            table_rows.append(cells)
            continue
        else:
            if in_table:
                # render table
                html_lines.append('<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse; width:100%; margin:18px 0; border:1px solid #c7d2fe;">')
                for i, row in enumerate(table_rows):
                    tag = "th" if i == 0 else "td"
                    bg = 'style="background-color:#1e3a8a; color:#ffffff; font-weight:bold; text-align:left;"' if i == 0 else ('style="background-color:#f8fafc;"' if i%2==1 else '')
                    html_lines.append(f'  <tr>')
                    for cell in row:
                        cell_html = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', html.escape(cell))
                        html_lines.append(f'    <{tag} {bg}>{cell_html}</{tag}>')
                    html_lines.append(f'  </tr>')
                html_lines.append('</table>')
                in_table = False
                table_rows = []
                
        if not stripped:
            continue
            
        if stripped.startswith("# "):
            title = html.escape(stripped[2:])
            html_lines.append(f'<h1 style="color:#1e3a8a; font-size:24pt; border-bottom:3px solid #3b82f6; padding-bottom:8px; margin-top:24px; font-family:\'Latha\',\'Nirmala UI\',\'Calibri\',sans-serif;">{title}</h1>')
        elif stripped.startswith("## "):
            title = html.escape(stripped[3:])
            html_lines.append(f'<h2 style="color:#1e40af; font-size:18pt; border-bottom:1.5px solid #93c5fd; padding-bottom:4px; margin-top:20px; font-family:\'Latha\',\'Nirmala UI\',\'Calibri\',sans-serif;">{title}</h2>')
        elif stripped.startswith("### "):
            title = html.escape(stripped[4:])
            html_lines.append(f'<h3 style="color:#1d4ed8; font-size:14pt; margin-top:16px; font-family:\'Latha\',\'Nirmala UI\',\'Calibri\',sans-serif;">{title}</h3>')
        elif stripped.startswith("* ") or stripped.startswith("- "):
            item = stripped[2:]
            item_html = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', html.escape(item))
            html_lines.append(f'<li style="margin-bottom:6px; line-height:1.6; font-size:11pt; font-family:\'Nirmala UI\',\'Calibri\',sans-serif;">{item_html}</li>')
        elif re.match(r'^\d+\.\s', stripped):
            item = re.sub(r'^\d+\.\s', '', stripped)
            item_html = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', html.escape(item))
            html_lines.append(f'<p style="margin-left:20px; margin-bottom:8px; line-height:1.6; font-size:11pt; font-family:\'Nirmala UI\',\'Calibri\',sans-serif;"><strong>{stripped.split(".")[0]}.</strong> {item_html}</p>')
        else:
            para_html = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', html.escape(stripped))
            para_html = re.sub(r'\*(.*?)\*', r'<em>\1</em>', para_html)
            html_lines.append(f'<p style="line-height:1.7; margin-bottom:12px; font-size:11pt; text-align:justify; font-family:\'Nirmala UI\',\'Calibri\',sans-serif;">{para_html}</p>')
            
    if in_table:
        html_lines.append('</table>')
        
    return "\n".join(html_lines)

html_body = md_to_html_body(md_content)

doc_template = f"""<html xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:w="urn:schemas-microsoft-com:office:word"
xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="ProgId" content="Word.Document">
<meta name="Generator" content="Microsoft Word 15">
<meta name="Originator" content="Microsoft Word 15">
<title>DailyStory - Educational Psychology &amp; School Guide</title>
<!--[if gte mso 9]>
<xml>
 <w:WordDocument>
  <w:View>Print</w:View>
  <w:Zoom>100</w:Zoom>
  <w:DoNotOptimizeForBrowser/>
 </w:WordDocument>
</xml>
<![endif]-->
<style>
@page Section1 {{
    size: 595.3pt 841.9pt; /* A4 */
    margin: 54.0pt 54.0pt 54.0pt 54.0pt;
    mso-header-margin: 35.4pt;
    mso-footer-margin: 35.4pt;
    mso-paper-source: 0;
}}
div.Section1 {{
    page: Section1;
}}
body {{
    font-family: 'Nirmala UI', 'Latha', 'Calibri', 'Times New Roman', serif;
    font-size: 11pt;
    color: #1e293b;
    background-color: #ffffff;
}}
h1, h2, h3, h4 {{
    font-family: 'Nirmala UI', 'Latha', 'Calibri', sans-serif;
}}
table {{
    font-size: 10pt;
}}
</style>
</head>
<body lang="TA">
<div class="Section1">
<div style="text-align:center; padding:20px; background-color:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; margin-bottom:24px;">
  <p style="font-size:10pt; color:#2563eb; font-weight:bold; letter-spacing:1px; margin:0;">RESEARCH MONOGRAPH &amp; PEDAGOGICAL POLICY GUIDELINE</p>
  <h1 style="color:#1e3a8a; font-size:22pt; margin:8px 0; border:none;">டெய்லி ஸ்டோரி (DailyStory) - கல்வி உளவியல் மற்றும் பள்ளிக் கற்பித்தல் வழிகாட்டி</h1>
  <p style="font-size:11pt; color:#475569; margin:4px 0;">இணைய முகவரி: <a href="https://dailystory.pages.dev" style="color:#2563eb;">https://dailystory.pages.dev</a> | ஆய்வு சஞ்சிகை வெளியீட்டுத் தரம்</p>
</div>

{html_body}

<hr style="border:0; border-top:1px solid #cbd5e1; margin-top:40px; margin-bottom:20px;" />
<p style="font-size:9pt; color:#64748b; text-align:center;">
  DailyStory Education Portal © 2026. கல்வி உளவியல், பன்மொழி இலக்கியம் மற்றும் சமத்துவ விழுமியங்களுக்கான திறந்தநிலை வழிகாட்டி.
</p>
</div>
</body>
</html>
"""

# Save .doc file in public/docs and artifact dir
doc_out_public = os.path.join(PUBLIC_DOCS, "DailyStory_Educational_Psychology_Guide.doc")
doc_out_artifact = os.path.join(ARTIFACT_DIR, "DailyStory_Educational_Psychology_Guide.doc")

with open(doc_out_public, "w", encoding="utf-8-sig") as f:
    f.write(doc_template)

with open(doc_out_artifact, "w", encoding="utf-8-sig") as f:
    f.write(doc_template)

print(f"Generated DOC: {doc_out_public} ({os.path.getsize(doc_out_public)} bytes)")


# 2. GENERATE NATIVE OPENXML .DOCX ARCHIVE
# Build genuine ECMA-376 zip archive containing document.xml with clean typography
def create_docx(text_content, docx_path):
    import xml.sax.saxutils as sax
    
    # Simple converter from lines to WordprocessingML paragraphs
    body_xml_parts = []
    
    # Title Header Block
    body_xml_parts.append("""
    <w:p>
      <w:pPr>
        <w:jc w:val="center"/>
        <w:pBdr><w:bottom w:val="single" w:sz="12" w:space="4" w:color="2563EB"/></w:pBdr>
        <w:spacing w:before="240" w:after="240"/>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Nirmala UI"/>
          <w:b/>
          <w:color w:val="1E3A8A"/>
          <w:sz w:val="44"/>
          <w:szCs w:val="44"/>
        </w:rPr>
        <w:t>DailyStory: கல்வி உளவியல் மற்றும் பள்ளிக் கற்பித்தல் கையேடு</w:t>
      </w:r>
    </w:p>
    """)
    
    in_code = False
    for line in text_content.split("\n"):
        s = line.strip()
        if s.startswith("```"):
            in_code = not in_code
            continue
        if in_code:
            continue
        if not s:
            continue
            
        esc = sax.escape(s)
        if s.startswith("# "):
            title = sax.escape(s[2:])
            body_xml_parts.append(f"""
            <w:p>
              <w:pPr>
                <w:spacing w:before="360" w:after="160"/>
                <w:pBdr><w:bottom w:val="single" w:sz="8" w:space="2" w:color="3B82F6"/></w:pBdr>
              </w:pPr>
              <w:r>
                <w:rPr>
                  <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Nirmala UI"/>
                  <w:b/>
                  <w:color w:val="1E3A8A"/>
                  <w:sz w:val="36"/>
                  <w:szCs w:val="36"/>
                </w:rPr>
                <w:t>{title}</w:t>
              </w:r>
            </w:p>
            """)
        elif s.startswith("## "):
            title = sax.escape(s[3:])
            body_xml_parts.append(f"""
            <w:p>
              <w:pPr><w:spacing w:before="280" w:after="120"/></w:pPr>
              <w:r>
                <w:rPr>
                  <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Nirmala UI"/>
                  <w:b/>
                  <w:color w:val="1E40AF"/>
                  <w:sz w:val="28"/>
                  <w:szCs w:val="28"/>
                </w:rPr>
                <w:t>{title}</w:t>
              </w:r>
            </w:p>
            """)
        elif s.startswith("### "):
            title = sax.escape(s[4:])
            body_xml_parts.append(f"""
            <w:p>
              <w:pPr><w:spacing w:before="200" w:after="80"/></w:pPr>
              <w:r>
                <w:rPr>
                  <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Nirmala UI"/>
                  <w:b/>
                  <w:color w:val="2563EB"/>
                  <w:sz w:val="24"/>
                  <w:szCs w:val="24"/>
                </w:rPr>
                <w:t>{title}</w:t>
              </w:r>
            </w:p>
            """)
        elif s.startswith("* ") or s.startswith("- "):
            text = sax.escape(s[2:])
            # bold handling
            body_xml_parts.append(f"""
            <w:p>
              <w:pPr>
                <w:ind w:left="480" w:hanging="240"/>
                <w:spacing w:before="40" w:after="40" w:line="280" w:lineRule="auto"/>
              </w:pPr>
              <w:r><w:rPr><w:rFonts w:ascii="Calibri" w:cs="Nirmala UI"/></w:rPr><w:t>• </w:t></w:r>
              <w:r>
                <w:rPr>
                  <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Nirmala UI"/>
                  <w:sz w:val="22"/>
                  <w:szCs w:val="22"/>
                </w:rPr>
                <w:t>{text}</w:t>
              </w:r>
            </w:p>
            """)
        else:
            body_xml_parts.append(f"""
            <w:p>
              <w:pPr>
                <w:jc w:val="both"/>
                <w:spacing w:before="60" w:after="120" w:line="320" w:lineRule="auto"/>
              </w:pPr>
              <w:r>
                <w:rPr>
                  <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Nirmala UI"/>
                  <w:sz w:val="22"/>
                  <w:szCs w:val="22"/>
                  <w:color w:val="1E293B"/>
                </w:rPr>
                <w:t xml:space="preserve">{esc}</w:t>
              </w:r>
            </w:p>
            """)
            
    body_xml_str = "\n".join(body_xml_parts)
    
    document_xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
                xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
      <w:body>
        {body_xml_str}
        <w:sectPr>
          <w:pgSz w:w="11906" w:h="16838"/>
          <w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="708" w:footer="708" w:gutter="0"/>
        </w:sectPr>
      </w:body>
    </w:document>"""

    content_types = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
      <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
      <Default Extension="xml" ContentType="application/xml"/>
      <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
    </Types>"""

    package_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
      <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
    </Relationships>"""

    with zipfile.ZipFile(docx_path, "w", zipfile.ZIP_DEFLATED) as zf:
        zf.writestr("[Content_Types].xml", content_types)
        zf.writestr("_rels/.rels", package_rels)
        zf.writestr("word/document.xml", document_xml)

docx_out_public = os.path.join(PUBLIC_DOCS, "DailyStory_Educational_Psychology_Guide.docx")
docx_out_artifact = os.path.join(ARTIFACT_DIR, "DailyStory_Educational_Psychology_Guide.docx")

create_docx(md_content, docx_out_public)
create_docx(md_content, docx_out_artifact)

print(f"Generated DOCX: {docx_out_public} ({os.path.getsize(docx_out_public)} bytes)")
