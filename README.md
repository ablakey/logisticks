# logisticks

An interactive demonstration of robots flowing through an area, moving stuff from sources to sinks.

## Goals

A Canvas-based UI:
- polygons (obstacles/walls)
- lines (a graph of driving routes)
- sprites (SVG based, doesn't have to animate)
- configurable symbology

Interactivity:
- Can click on a polygon and edit it
  - handles on vertexes
  - different symbology for selected
- Can click and edit paths
  - snapping to other paths
- Can smoothly zoom and pan with mouse

Implementation:
- Layer-based system
- presentation layer is decoupled from data layer
  - data layer is NOT the objects used by the renderer
  - data layer is purely driven by a render loop and the objects handed to it

### Stretch Goals
- bezier curves for the driving routes

### #Non Goals
- Mobile support

## Phases

### Phase 1 (Render and Interactivity)
- Ability to draw, render, select:
  - polygons
  - lines
  - sprites


### Phase 2 (Main Loop)
- Spawn sources
- Spawn sinks
- Robots moving things from sources to sinks
- Robots do not collide
- Robots use paths


### Phase 3 (Interactive Game)
- Figure out what the actual challenge is, then fill out this section.


