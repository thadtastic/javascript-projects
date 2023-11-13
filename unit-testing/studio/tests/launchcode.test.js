// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("organization should return value of nonprofit ", function(){
    expect(launchcode.organization).toEqual("nonprofit")
  });
  test("executiveDirector should return value of jeff ", function(){
      expect(launchcode.executiveDirector).toEqual("jeff")
  
  });
  test("percentageCoolEmployees should return value of 100 ", function(){
    expect(launchcode.percentageCoolEmployees).toEqual(100)

});
test("executiveDirector should return value of jeff ", function(){
  expect(launchcode.executiveDirector).toEqual("jeff")

});
test("programsOffered should contain value of Web Development ", function(){
  expect(launchcode.programsOffered).toContain("Web Development")

});
test("programsOffered should contain value of Data Analysis ", function(){
  expect(launchcode.programsOffered).toContain("Data Analysis")

});
test("programsOffered should contain value of Liftoff ", function(){
  expect(launchcode.programsOffered).toContain("Liftoff")

});
test("Programs offered should have three elements", function(){
  expect(launchcode.programsOffered.length).toBe(3)
});
test("Number should be divisble by 2", function(){
  expect(launchcode.launchOutput(16)).toEqual("launch!")
})
});