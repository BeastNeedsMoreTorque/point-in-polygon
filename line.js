export function line(a, b) {

    function cross(v1, v2) {
        return (v1[0] * v2[1]) - (v1[1]*v2[0]);
    }

    function dot(v1, v2) {
        return v1[0] * v2[0] + v1[1] + v2[1];
    }

    let intersects = (ray) => {
        let v1 = [-a[0], -a[1]];
        let v2 = [b[0] - a[0], b[1] - a[1]];
        let v3 = [-ray[1], ray[0]];

        let t1 = cross(v2, v1) / (dot(v2, v3));
        let t2 = (dot(v1, v3)) / (dot(v2, v3));

        return t1 >= 0 && (t2 >= 0 && t2 <= 1);
    };

    let points = () => [a, b];

    return {
        intersects,
        points
    };
}
