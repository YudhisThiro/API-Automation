const {getMethod, postMethod} = require("../apiServer/apiObjects");

//test suites
describe("Testting API restful", function() {
    //Test Case 1
    it("Test GET from Function", async function(){
    getMethod();
   });
   it("Test POST from Function", async function(){
    postMethod();
});
});

