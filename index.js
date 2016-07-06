import { polygon } from "./polygon";

export function pointInPoly(poly, point) {
    return polygon(poly).surrounds(point);
}
