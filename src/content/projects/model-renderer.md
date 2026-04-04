---

title: "DirectX 12 Model Renderer"
description: "A real-time model renderer built with DirectX 12 and C++, featuring Assimp model loading, advanced lighting, shadow mapping, and material systems."
type: "product"
status: "completed"
date: "2025-10"
coverImage: "https://github.com/user-attachments/assets/6abedc4f-6ca0-4540-84fb-bbfeac6ed8b5"
hasVideo: true
tags: ["DirectX 12", "C++", "Graphics Programming", "Rendering", "Assimp"]
links:
github: "https://github.com/yourusername/directx12-model-renderer"
---

## Overview

This project builds upon a custom DirectX 12 rendering framework and extends it with full -model rendering-, -advanced lighting-, and a flexible -material system-. It integrates -Assimp- for asset importing and supports modern real-time rendering techniques such as shadow mapping, normal mapping, and parallax mapping.

The renderer is designed with a modular architecture, allowing models, materials, and lighting systems to scale while maintaining real-time performance.

![Screenshot](https://github.com/user-attachments/assets/6abedc4f-6ca0-4540-84fb-bbfeac6ed8b5)

<video controls>
  <source src="https://github.com/user-attachments/assets/654a5db4-e9b5-4220-ad5a-4494431a18f5" type="video/mp4" />
</video>

![Screenshot](https://github.com/user-attachments/assets/262e4e3f-4d47-4745-b85d-fcddafdfdaad)

<video controls>
  <source src="https://github.com/user-attachments/assets/03536e32-5c7d-45ce-b04d-8c2db38248da" type="video/mp4" />
</video>

## Features

- Full DirectX 12 rendering pipeline with modular design
- Model loading via Assimp (OBJ, FBX, GLTF)
- Mesh abstraction for vertex and index buffers
- Material system supporting multiple texture maps
- Directional, Point, and Spot Lights
- Phong and Blinn-Phong shading models
- Shadow Mapping using depth textures
- Normal and Parallax Mapping for surface detail
- Enhanced camera system with free movement
- Custom logger for categorized runtime messages
- Real-time FPS counter in the window title

## Concepts Demonstrated

- Assimp-based model importing and processing
- Vertex attributes (position, normals, tangents, UVs)
- Descriptor heap management for textures
- Multiple lighting models and light types
- Shadow map generation and projection
- Tangent space calculations for normal/parallax mapping
- Material abstraction and texture binding
- Camera transformations and view/projection matrices
- Command list recording and GPU synchronization
- Frame timing and performance monitoring

## Requirements

- Language: C++17 or later
- Graphics API: DirectX 12
- IDE: Visual Studio / Visual Studio Code

## Logging and FPS

A custom logging system provides categorized output (INFO, WARN, ERROR) to console and file.
An FPS counter is calculated per frame and displayed in the window title.
