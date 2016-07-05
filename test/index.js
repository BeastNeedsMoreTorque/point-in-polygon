import { expect } from "chai";
import { pointInPoly } from "../";

describe("pointInPoly", function() {

    it("detects a point in a triangle", function() {
        let poly = [[-1, -1], [1, -1], [0, 1]];
        expect(pointInPoly(poly, [0, 0])).to.be.true;
    });

});
