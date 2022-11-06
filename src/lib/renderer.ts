import * as Pixi from "pixi.js";
import { Feature, Polygon } from "./types";
import { DeepReadonly, assert } from "ts-essentials";

export type Layer = {
  name: string;
  data: DeepReadonly<Feature<Polygon>[]>;
};

type LayerInternal = {
  pixiContainer: Pixi.Container;
};

export class Renderer {
  private rootContainer: Pixi.Container;
  private layers: (Layer & LayerInternal)[];

  constructor() {
    this.rootContainer = new Pixi.Container();
    this.layers = [];
  }

  update(layers: Layer[]) {
    // Delete removed.
    this.layers.forEach(({ name }) => {
      if (!(name in layers)) {
        this.deleteLayer(name);
      }
    });

    // Add new.
    layers.forEach((layer) => {
      if (!this.layers.find((l) => l.name === layer.name)) {
        // Add
        this.createLayer(layer);
      }

      this.updateLayer(layer);

      // Update rest.
    });
  }

  private createLayer(layer: Layer) {
    const pixiContainer = new Pixi.Container();
    const layerInternal: Layer & LayerInternal = { ...layer, pixiContainer };
    this.layers.push(layerInternal);
  }

  private updateLayer(layer: Layer) {
    const oldInternal = this.layers.find((l) => l.name === layer.name);
    assert(oldInternal);
    Object.assign(oldInternal, layer);

    // TODO
    // Create, Update, Delete features.
    // Performance critical.
  }

  private deleteLayer(name: string) {
    delete this.layers[name];
  }
}
