function countIntersections(poly, point) {
    return 1;
}

export function pointInPoly(poly, point) {
    let intersections = countIntersections(poly, point);
    return !!(intersections % 2);
}
