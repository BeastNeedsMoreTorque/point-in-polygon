export function polygon(_points) {

    let surrounds = ([x, y]) => {
        let intersections = translate([-x, -y]).intersections([0, 1]);
        return !!(intersections % 2);
    };

    let translate = ([x, y]) => {
        return polygon(_points);
    };

    let intersections = (ray) => 1;

    return {
        surrounds,
        translate,
        intersections
    };
}
