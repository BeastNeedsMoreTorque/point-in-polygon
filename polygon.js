import { line } from "./line";

export function polygon(_points) {

    let surrounds = ([x, y]) => {
        let intersections = translate([-x, -y]).intersections([0, 1]);
        return !!(intersections % 2);
    };

    let translate = ([x, y]) => {
        return polygon(_points.map(p => [p[0] + x, p[1] + y]));
    };

    let intersections = (ray) => {
        return lines().filter(line => line.intersects(ray)).length;
    };

    let points = () => _points;

    let lines = () => {
        return [line([-1, 1], [1, 1])];
    }

    return {
        surrounds,
        translate,
        intersections,
        points,
        lines
    };
}
