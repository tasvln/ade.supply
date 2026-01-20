---
title: "DirectX Model Renderer"
description: "Developed a real-time model renderer using DirectX 12 and C++, supporting transformations, lighting, texture mapping, and Keyboard and Mouse gestures."
type: "product"
status: "completed"
date: "2025-01"
coverImage: "https://github.com/user-attachments/assets/37297420-225e-4623-90dd-b10ce7d134a5"
hasVideo: true
tags: ["DirectX 12", "C++", "Graphics Programming"]
links:
  github: "https://github.com/tasvln/directx-renderer"
---

## Overview

This project demonstrates a complete **DirectX 12 graphics pipeline** through a simple 3D cube renderer. The implementation covers GPU initialization, resource setup, shader compilation, command recording, synchronization, and presentation. The demo includes an orbit camera, vertex-colored cube, a custom logging system, and an FPS counter shown in the window title.

![Screenshot 2025-10-08 135345](https://github.com/user-attachments/assets/37297420-225e-4623-90dd-b10ce7d134a5)

<https://github.com/user-attachments/assets/951ff221-0057-4971-8852-07725134a768>

---

## Features

- Full DirectX 12 graphics pipeline setup (device, command queue, swap chain, descriptor heaps)
- Vertex and pixel shaders written in HLSL
- Vertex color interpolation for smooth gradients on the cube
- Orbit camera with basic mouse/keyboard controls
- Custom logger for categorized runtime messages (info, warn, error)
- Real-time FPS counter displayed in the window title
- Proper resource state transitions and GPU synchronization
- Simple, single-file demo structure suitable for learning and extension

---

## Concepts Demonstrated

- Direct3D 12 device and command queue creation
- Swap chain and render target view setup
- Descriptor heap management (RTV/CBV/SRV as applicable)
- Creating and binding vertex and index buffers
- Constant buffer usage and updating (view/projection/model matrices)
- Compiling and binding HLSL shaders (vertex/pixel)
- Command list recording and executing
- Resource barriers and fence-based GPU synchronization
- Basic camera math (view and projection matrices)
- Basic performance tracking (frame timing and FPS)

---

## Requirements

- Language: C++17 or later
- Graphics API: DirectX 12
- IDE: Visual Studio Code (Visual Studio 2019/2022 works too)
- SDKs/Libraries:
  - (Check Cmake File For all libraries)
