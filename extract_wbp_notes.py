import zipfile
import xml.etree.ElementTree as ET
import os
import sys

# Handle unicode output
try:
    sys.stdout.reconfigure(encoding='utf-8')
except AttributeError:
    pass # In case newer python logic differs or old python

def extract_text_from_docx(docx_path):
    try:
        if not os.path.exists(docx_path):
            return f"File not found: {docx_path}"

        with zipfile.ZipFile(docx_path) as z:
            xml_content = z.read("word/document.xml")
            tree = ET.fromstring(xml_content)
            
            # Namespace for word processingml
            ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            text_parts = []
            for p in tree.findall('.//w:p', ns):
                texts = [node.text for node in p.findall('.//w:t', ns) if node.text]
                if texts:
                    text_parts.append(''.join(texts))
                else:
                    text_parts.append('') # preserving paragraph breaks
            
            return '\n'.join(text_parts)

    except Exception as e:
        return f"Error reading docx: {str(e)}"

docx_file = r"components/courses/WBP/Unit 1 Notes.docx"
print(extract_text_from_docx(docx_file))
