// ./sum.test.js
const sum = require("./sum");

describe("example test", () => {

    it("should add 1 + 2 to equal 3", () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });

    it("object assignment", () => {
        const obj = {}; // Creamos un objeto vacío y lo asignamos a la variable obj
    
        // Este primer test falla porque .toBe compara la referencia de los objetos.
        // Aunque ambos son objetos vacíos, son instancias diferentes en memoria.
        // Por lo tanto, obj y {} no son el mismo objeto, lo que hace que la comparación falle.
        // expect(obj).toBe({}); // Falla: obj y {} son diferentes instancias.
    
        // Este segundo test pasa porque .toEqual compara el contenido de los objetos.
        // Aunque obj y {} son diferentes instancias, ambos tienen las mismas propiedades
        // (en este caso, ninguna), así que su contenido es considerado igual.
        expect(obj).toEqual({}); // Pasa: obj y {} tienen el mismo contenido.
    });
    
});

describe("truthy or falsy for null", () => {
    it("null is falsy", () => {
        const n = null;
        expect(n).toBeFalsy();
        // Otra forma de probarlo:
        expect(n).not.toBeTruthy();
        // 
        expect(n).toBeNull();
        // Esta prueba falla porque null no es igual a undefined
        // expect(n).toBeUndefined();
        // Lo que puedo hacer es añadirle un .not
        expect(n).not.toBeUndefined();
    });
});

describe("truthy or falsy for 0", () => {
    it("0 is falsy", () => {
        const n = 0;
        expect(n).toBeFalsy();
        // Otra forma de probarlo:
        expect(n).not.toBeTruthy();
    });
});

describe("truthy or falsy for empty string", () => {
    it("empty string is falsy", () => {
        const n = "";
        expect(n).toBeFalsy();
        // Otra forma de probarlo:
        expect(n).not.toBeTruthy();
    });
});

describe("numbers", () => {
    it("two plus two is four", () => {
        const value = 2 + 2;
        expect(value).toBe(4);
        // Podemos esperar que este valor sea mayor que 3
        expect(value).toBeGreaterThan(3);
        // Podemos esperar que este valor sea mayor o igual que 3
        expect(value).toBeGreaterThanOrEqual(3);
        // Podemos esperar que este valor sea menor que 5
        expect(value).toBeLessThan(5);
        // Podemos esperar que este valor sea menor o igual que 5
        expect(value).toBeLessThanOrEqual(5);
    });
});

