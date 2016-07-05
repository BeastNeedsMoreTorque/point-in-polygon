import { expect } from "chai";
import { line } from "../line";

describe("line", function() {

    it("checks if the line intersects a ray", function() {
        expect(line([0, 1], [1, 0]).intersects([1, 1])).to.be.true;
        expect(line([0, 1], [1, 0]).intersects([-1, -1])).to.be.false;
        expect(line([4, -6], [4, 4]).intersects([0, 1])).to.be.false;
    });

});
