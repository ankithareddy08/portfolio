#!/usr/bin/env python3
from PIL import Image, ImageDraw
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Create a simple Stitch logo (flask/beaker icon) - 192x192 pink background with black beaker
img = Image.new('RGB', (192, 192), color=(255, 192, 203))  # Pink background
draw = ImageDraw.Draw(img)

# Draw a simple beaker/flask shape in black
# Beaker top (rectangle)
draw.rectangle([60, 40, 132, 55], fill='black')

# Beaker neck
draw.rectangle([75, 55, 117, 75], fill='black')

# Beaker body (trapezoid approximated with polygon)
points = [
    (50, 75),   # left bottom
    (142, 75),  # right bottom
    (130, 160), # right top
    (62, 160)   # left top
]
draw.polygon(points, fill='black')

# Save the image
img.save('Google-Stitch-Logo.png', 'PNG')
print("✓ Created Google-Stitch-Logo.png")

# Verify
from pathlib import Path
size = Path('Google-Stitch-Logo.png').stat().st_size
print(f"File size: {size} bytes")
