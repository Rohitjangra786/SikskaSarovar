import zipfile
import xml.etree.ElementTree as ET
import os
import re

pptx_path = 'components/courses/DMP/DMP-Unit 2.pptx'

def extract_text_from_pptx(path):
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return

    text_content = []
    try:
        with zipfile.ZipFile(path, 'r') as z:
            # Find all slide XML files
            slides = [f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            # Sort slides by number (slide1, slide2, etc.)
            slides.sort(key=lambda x: int(re.search(r'slide(\d+)', x).group(1)))

            for slide in slides:
                # Read slide content
                xml_content = z.read(slide)
                root = ET.fromstring(xml_content)
                
                # Namespace map (usually text is in a:t)
                # We can just search for all 't' tags in the proper namespace or just any tag ending in 't'
                # The namespace for drawingml is usually http://schemas.openxmlformats.org/drawingml/2006/main
                
                slide_text = []
                for elem in root.iter():
                    if elem.tag.endswith('}t'):
                        if elem.text:
                            slide_text.append(elem.text)
                
                if slide_text:
                    text_content.append(f"--- Slide {slides.index(slide) + 1} ---")
                    text_content.append("\n".join(slide_text))
                    text_content.append("\n")
                    
    except Exception as e:
        print(f"Error reading PPTX: {e}")

    return "\n".join(text_content)

print(extract_text_from_pptx(pptx_path))
