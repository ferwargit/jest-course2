// let animals = ['elephant', 'zebra', 'bear', 'tiger'];
let animals = [];

// // Se ejecuta antes de todos los tests
// beforeAll(() => {
//     // console.log('before all');
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];
// });

// Se ejecuta antes de cada test
// beforeEach(() => {
//     // console.log('before each');
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];
// });

// // Se ejecuta despues de todos los tests
// afterAll(() => {
//     // console.log('after all');
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];
// });

// // Se ejecuta despues de cada test
// afterEach(() => {
//     // console.log('after each');
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];
// });

describe('Animals array', () => {

    beforeEach(() => {
        // animals = ['elephant', 'zebra', 'bear', 'tiger'];
        animals = ['elephant', 'zebra', 'bear', 'tiger'];
    });

    
    it('should add animal to end of array', () => {
        // animals = ['elephant', 'zebra', 'bear', 'tiger'];
        animals.push('aligator');
        expect(animals[animals.length - 1]).toBe('aligator');
    });

    it('should add animal to beginning of array', () => {
        // animals = ['elephant', 'zebra', 'bear', 'tiger'];
        animals.unshift('monkey');
        expect(animals[0]).toBe('monkey');
    });

    it('should have initial length of 4', () => {
        // animals = ['elephant', 'zebra', 'bear', 'tiger'];
        expect(animals.length).toBe(4);
    });
});

describe("testing something else", () => {
    // it.only("true should be truthy", () => {
    it("true should be truthy", () => {
        expect(true).toBeTruthy();
    });
});
