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

