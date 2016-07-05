import { expect } from "chai";
import { pointInPoly } from "../";

describe("pointInPoly", function() {

    it("detects a point in a triangle", function() {
        let poly = [[-1, -1], [1, -1], [0, 1]];
        expect(pointInPoly(poly, [0, 0])).to.be.true;
    });

    it("detects a point in a square", function() {
        var poly = [
            [-5, -5], [5, -5],
            [5, 5], [-5, 5]
        ];

        expect(pointInPoly(poly, [-6, 0])).to.be.false;
        expect(pointInPoly(poly, [1, 1])).to.be.true;
    });

});
