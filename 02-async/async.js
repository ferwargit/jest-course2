// Función que realiza una solicitud API usando axios
const axios = require("axios");

const fetchData = async (id) => {
    const results = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return results.data;
};

module.exports = fetchData;