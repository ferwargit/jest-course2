const fetchData = require("./async");

describe("fetchData", () => {
    it("should return correct todo", async () => {
        const todo = await fetchData(1);
        expect(todo.id).toBe(1);
    });

    it("should return correct data.title", async () => {
        const data = await fetchData(1);
        expect(data.title).toMatch("delectus aut autem");
    });
});