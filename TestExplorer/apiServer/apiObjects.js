const request = require("supertest"); //import supertest
const {expect} = require("chai"); //import chai
const baseUrl = require("../globalVariable/baseUrl");

const url = `${baseUrl}`; //define global variable

async function getMethod() {
    const response = await request(url).get("/objects/12");
     // verifikasi
     expect(response.status).to.equal(200);
     console.log(response);
}
async function postMethod() {
    const response = await request(url)
    .post("/objects")
    .send({
        name: "YudhisThiro",
        data: {
            Generation :"2024",
            Price: "25000",
            Capacity:"135",
        },
    });
    // verifikasi
    expect(response.status).to.equal(200);
    console.log(response.body.id);
}

module.exports = {getMethod, postMethod};