import supertest from 'supertest';
import { expect } from 'chai';
const {Given,When,Then} = require('cucumber')


  Given('User has Endpoint URL', function () {
    const request2 = supertest('https://testapi.io/api/RMSTest/ibltest');
    return console.log("Endpoint ready");
  });



  When ('User makes a GET request', function () {
    return request2.get().then((response) => {
        expect(response.status).to.be.eq(200);
    return console.log(response.status);
  });
});


  Then ('Response should be 200', function (int) {
    if(response.status=200){
        console.log("Success")
    }

    return 'pending';
  });