import {Birb} from "../src/birb";

let birbInstance: Birb;

beforeEach(() => {
    birbInstance = new Birb();
});

test('#simple', () => {
    expect(birbInstance).toBeInstanceOf(Birb);
    console.log(birbInstance);
});
