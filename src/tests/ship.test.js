const Ship = require("../modules/ship");

test("Ship has length of 4", () => {
    const newShip = Ship(4);
    expect(newShip.length).toEqual(4);
});

test("New ship has 0 hits", () => {
    const newShip = Ship(4);
    expect(newShip.numHits).toEqual(0);
});

test("Ship is hittable", () => {
    const newShip = Ship(4);
    newShip.hit();
    expect(newShip.numHits).toEqual(1);
});

test("Ship is sinkable", () => {
    const newShip = Ship(2);
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toEqual(true);
});