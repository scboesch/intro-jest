let greetings = require("./index");

describe("Greeting", () => {
  it("knows that hello returns HELLO", () => {
    expect(greetings.hello()).toBe("HELLO");
  });
});

describe("Goodbye", () => {
  it("knows that goodbye returns GOODBYE", () => {
    expect(greetings.goodbye()).toBe("GOODBYE");
  });
});