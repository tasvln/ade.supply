---

title: "DirectX 12 Weather & Environment System"
description: "A real-time weather and environment system built with DirectX 12 and C++, featuring GPU-driven particles, dynamic sky rendering, and procedural clouds."
type: "product"
status: "completed"
date: "2026-04"
coverImage: "https://github.com/user-attachments/assets/e91cea79-357c-4ad1-b5e0-94e0e1a898b9"
hasVideo: true
tags: ["DirectX 12", "C++", "Graphics Programming", "Compute Shaders", "Real-Time Rendering"]
links:
github: "https://github.com/tasvln/directx-terrain-weather"
------------------------------

## Overview

This project implements a modular **real-time weather and environment system** using DirectX 12 and C++. It focuses on GPU-driven simulation, dynamic lighting, and procedural rendering techniques commonly used in modern open-world engines.

The system integrates sky rendering, weather states, particle simulation, fog, and terrain into a unified pipeline. All major systems are designed to be configurable and driven from the CPU while leveraging the GPU for performance-critical work.

![screenshot](https://github.com/user-attachments/assets/eafc2c34-467f-4ccc-a57b-46e9a0a03ca7)

![Video](https://github.com/user-attachments/assets/31d457df-17b5-443d-840d-de06a43fa6d5)

---

## Features

* Dynamic day/night cycle with smooth transitions
* Procedural sky with sun, moon, and star rendering
* FBM-based procedural clouds with wind-driven motion
* Multiple weather types (clear, rain, storm, snow, blizzard)
* GPU-based particle system (~50,000 particles)
* Rain rendering with velocity-aligned streaks
* Snow simulation with randomized drift and de-synchronized spawning
* Distance and height-based fog
* Heightmap terrain with player-ground interaction
* Wind system affecting both particles and clouds

---

## Concepts Demonstrated

* Direct3D 12 compute pipeline for particle simulation
* Structured buffers with UAV/SRV access patterns
* GPU-driven billboarding via vertex shader expansion
* Procedural noise generation (hash, value noise, FBM)
* Atmospheric scattering approximations (Mie phase function)
* Real-time parameter control via constant buffers
* Resource state transitions and synchronization
* Camera-relative simulation techniques
* Modular system design for real-time environments

---

## Requirements

* Language: C++17 or later
* Graphics API: DirectX 12
* IDE: Visual Studio / Visual Studio Code
* GPU with DirectX 12 support

---
