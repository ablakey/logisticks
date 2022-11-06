export type Polygon = {
  coordinates: [number, number][][];
};

export type Geometry = Polygon;

export type Feature<T extends Geometry> = {
  id: string;
  geometry: T;
};
