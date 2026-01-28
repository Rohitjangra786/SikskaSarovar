import zipfile
import xml.etree.ElementTree as ET
import os
import re
import sys

# Absolute path to be safe
pptx_path = r'c:/Users/rjang/GitHub/SikskaSarovar/components/courses/DMP/DMP-Unit 2.pptx'

print(f"Starting extraction from: {pptx_path}")

if not os.path.exists(pptx_path):
    print(f"File DOES NOT EXIST at {pptx_path}")
    # Try looking around
    print(f"CWD: {os.getcwd()}")
    if os.path.exists('components'):
        print("components dir exists")
    sys.exit(1)
else:
    print("File exists, opening...")

def extract_text():
    text_content = []
    try:
        with zipfile.ZipFile(pptx_path, 'r') as z:
            print("Zip opened.")
            # Find all slide XML files
            slides = [f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            print(f"Found {len(slides)} slides.")
            
            # Sort slides by number (slide1, slide2, etc.)
            slides.sort(key=lambda x: int(re.search(r'slide(\d+)', x).group(1)))

            for slide in slides:
                # Read slide content
                xml_content = z.read(slide)
                root = ET.fromstring(xml_content)
                
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

content = extract_text()
print("Extraction complete. Content length:", len(content))
print("--- START CONTENT ---")
print(content)
print("--- END CONTENT ---")
