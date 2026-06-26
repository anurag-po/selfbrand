---
title: "GACL OCR Pipeline"
subtitle: "Industrial Offline OCR & Table Reconstruction System"
description: "Industrial computer vision system built entirely offline. Extracts structured data from dashboard imagery using OpenCV, PaddleOCR, and custom table reconstruction."
order: 2
tags: ["Python", "OpenCV", "PaddleOCR", "Computer Vision"]
github: ""
demo: ""
---

## The Hook
An offline industrial computer vision pipeline that processes complex dashboard imagery and reconstructs tabular data with 98% accuracy on local hardware.

## Problem
In GACL's chemical processing plant, analog and digital instrumentation panels record critical operational metrics. Previously, technicians manually transcribed these values, which was slow and prone to errors. Using cloud-based OCR services was impossible due to strict data privacy regulations and the lack of reliable internet connectivity in the plant's remote zones.

## Motivation
Existing open-source OCR libraries fail when dealing with raw camera feeds from industrial floors. They struggle with camera tilt, glare from overhead lights, dust on panel glass, and unstructured table layouts. I needed to build a fully local pipeline that cleans the image, handles geometric distortions, detects readings, and correlates them into structured tables.

## Architecture
The system operates as a sequential local pipeline:

```
[Raw Image] -> [Perspective Rectification] -> [Adaptive Enhancement] -> [PaddleOCR Text Detection] -> [Graph-based Table Builder] -> [Structured JSON]
```

1. **Perspective Rectification**: Uses OpenCV to detect panel borders and apply a homography warp, aligning the dashboard to a flat, normalized plane.
2. **Adaptive Contrast Enhancement**: Employs CLAHE (Contrast Limited Adaptive Histogram Equalization) and local thresholding to eliminate glare and dark shadows.
3. **Text Detection & Recognition**: Utilizes a lightweight, CPU-optimized PaddleOCR model running locally to perform text bounding box localization.
4. **Table Reconstruction**: A custom graph-based algorithm clusters adjacent cells horizontally and vertically to reconstruct complex matrices without predefined grid layouts.

## Challenges
### 1. Severe Angle Distortion & Skew
Images taken by operators walking past panels had arbitrary angles. Standard OCR failed entirely. To resolve this, I implemented edge-based contour detection to find the rectangular frame of the panel. By mapping the four corners to a fixed aspect ratio, I could warp the image back into a clean, flat state.

### 2. High-Contrast Glare
Overhead industrial lights created hot-spots of bright light on protective glass, rendering text unreadable. I solved this by using multi-scale morphological operations to isolate high-intensity glare masks, then inpainting those areas based on surrounding pixels before performing local binarization.

## Lessons Learned
- **Image Preprocessing is King**: Deep learning OCR models are only as good as the inputs. Spending time refining OpenCV filters yielded a larger accuracy jump than switching to heavier model architectures.
- **CPU Optimization Matters**: In industrial environments, edge devices rarely have dedicated GPUs. Using ONNX Runtime and custom quantization was crucial to bring inference times down to under 1.2 seconds per frame on an Intel NUC.
