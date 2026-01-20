import zipfile
import xml.etree.ElementTree as ET
import sys
import os

def extract_text_from_docx(docx_path):
    try:
        if not os.path.exists(docx_path):
            print(f"File not found: {docx_path}")
            return

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

docx_file = r"components/courses/DMP/Unit 1.docx"
print(extract_text_from_docx(docx_file))
