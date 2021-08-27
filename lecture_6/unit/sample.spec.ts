const concatenate = (str1: string, str2: string) => {
  return `${str1} ${str2}`;
};
describe("Concatenate function", () => {
  it("Should concatenate two strings", () => {
    // arrange
    const str1 = "My first";
    const str2 = "test";
    // act
    const result = concatenate(str1, str2);
    // assert
    expect(typeof result).toEqual("string");
    expect(result).toEqual("My first test");
  });
});
