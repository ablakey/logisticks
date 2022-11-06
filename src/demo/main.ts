import { Layer, Renderer } from "../lib/renderer";

const renderer = new Renderer();

const layers: Layer[] = [
  {
    name: "wall",
    data: [
      {
        id: "a",
        geometry: {
          coordinates: [
            [
              [0, 0],
              [100, 0],
              [100, 100],
              [0, 100],
              [0, 0],
            ],
          ],
        },
      },
    ],
  },
];

renderer.update(layers);
