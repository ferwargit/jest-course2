// Importamos la biblioteca axios, que se utiliza para realizar solicitudes HTTP.
const axios = require("axios");

// Definimos una función asíncrona llamada fetchData que toma un parámetro id.
const fetchData = async (id) => {
    // Realizamos una solicitud GET a la API usando axios.
    // La URL incluye el id proporcionado como parte de la ruta.
    const results = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    // Imprimimos los resultados de la solicitud en la consola.
    console.log(results);

    // Retornamos los datos obtenidos de la respuesta de la API.
    return results.data;
};

// Definimos una prueba unitaria utilizando Jest para verificar el comportamiento de fetchData.
items("mock axios", async () => {
    // Simulamos el comportamiento de axios.get usando jest.spyOn.
    // Esto nos permite interceptar las llamadas a axios.get y devolver un valor simulado.
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            title: "delectus aut autem"
        }
    });

    // Llamamos a la función fetchData con el id 1 y esperamos el resultado.
    const results = await fetchData(1);

    // Verificamos que el id en los resultados sea igual a 1.
    expect(results.id).toBe(1);

    // Verificamos que el título en los resultados coincida con "delectus aut autem".
    expect(results.title).toMatch("delectus aut autem");
});
