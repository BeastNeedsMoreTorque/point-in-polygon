import { expect } from "chai";
import { polygon } from "../polygon";

describe("polygon", function() {

    it("checks if a polygon surrounds a point", function() {
        let poly = polygon([[-1, -1], [1, -1], [0, 1]]);
        expect(poly.surrounds([0, 0])).to.be.true;
    });

    it("translates a polygon", function() {
        expect(polygon([]).translate([0, 0]).points()).to.deep.equal([]);
        expect(polygon([
            [0, 0], [5, -5]
        ]).translate([1, 1]).points()).to.deep.equal([
            [1, 1], [6, -4]
        ]);
    });

    it("counts intersections with a ray", function() {
        let poly = polygon([[-1, -1], [1, -1], [0, 1]]);
        expect(polygon([
            [-1, -1], [1, -1], [0, 1]
        ]).intersections([0, 1])).to.equal(1);
    });

});
