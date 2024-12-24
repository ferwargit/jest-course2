// Definimos un array de caracteres
const items = ['a', 'b', 'c', 'd', 'e'];

// Definimos la función forEach, que toma dos parámetros:
// 1. items: un array que contiene los elementos a iterar.
// 2. callback: una función que se ejecutará para cada elemento del array.
const forEach = (items, callback) => {
    // Usamos un bucle for para recorrer cada elemento del array
    for (let i = 0; i < items.length; i++) {
        // Llamamos a la función callback, pasando el elemento actual (items[i])
        callback(items[i]);
    }
}

// Prueba unitaria utilizando Jest para verificar el comportamiento de la función forEach
it("mock callback", () => {
    // Creamos una función simulada (mock) llamada mockCalledBack
    // Esta función toma un argumento x y devuelve 42 + x.
    const mockCalledBack = jest.fn(x => 42 + x);

    // Llamamos a la función forEach, pasando el array [0, 1] y la función mockCalledBack.
    // Esto hará que mockCalledBack se ejecute para cada elemento del array.
    forEach([0, 1], mockCalledBack);

    // Verificamos que mockCalledBack fue llamada exactamente 2 veces,
    // una por cada elemento en el array [0, 1].
    expect(mockCalledBack.mock.calls.length).toBe(2);

    // Verificamos que la primera llamada a mockCalledBack tuvo el argumento 0.
    expect(mockCalledBack.mock.calls[0][0]).toBe(0);

    // Verificamos que la segunda llamada a mockCalledBack tuvo el argumento 1.
    expect(mockCalledBack.mock.calls[1][0]).toBe(1);

    // Verificamos que el resultado de la primera llamada a mockCalledBack fue 42.
    expect(mockCalledBack.mock.results[0].value).toBe(42);

    // Verificamos que el resultado de la segunda llamada a mockCalledBack fue 43.
    expect(mockCalledBack.mock.results[1].value).toBe(43);
});

it("mock return value", () => {
    // Creamos una función mock utilizando Jest.
    // Esta función puede ser llamada y su comportamiento se puede simular.
    const mock = jest.fn();

    // Configuramos la función mock para que devuelva un valor específico
    // la primera vez que se llama. En este caso, devolverá `true`.
    mock.mockReturnValueOnce(true);

    // Tambien se puede llamar varias veces con diferentes valores
    mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce("hola");

    // Llamamos a la función mock y almacenamos el resultado en la variable `results`.
    // Dado que configuramos la función para devolver `true` en la primera llamada,
    // esperamos que `results` contenga este valor.
    const results = mock();
    const results2 = mock();
    const results3 = mock();

    // Verificamos que el resultado de la llamada a la función mock sea igual a `true`.
    // Esta aserción garantiza que nuestra configuración del valor de retorno
    // se haya aplicado correctamente.
    expect(results).toBe(true);
    expect(results2).toBe(false);
    expect(results3).toBe("hola");
   
});
