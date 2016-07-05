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
        if ((!_points) || !_points.length) {
            return [];
        }

        let last = _points[0];
        let pairs = _points.slice(1).map((point) => {
            let segment = line(last, point);
            last = point;
            return segment;
        });
        pairs.push(line(_points[_points.length - 1], _points[0]));

        return pairs;
    }

    return {
        surrounds,
        translate,
        intersections,
        points,
        lines
    };
}
