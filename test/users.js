import supertest from 'supertest';
import { expect } from 'chai';

const request1 = supertest('https://gorest.co.in/public/v2/');
const request2 = supertest('https://testapi.io/api/RMSTest/');
const apiURL = 'https://testapi.io/api/RMSTest/ibltest';
const jsonPlaceholder = 'https://jsonplaceholder.typicode.com/posts/';

var jp = require('jsonpath');
var names = jp.query(apiURL, '$..type');
console.log(names);


describe('Users', ()=>{

    it('GET RESPONSE CODE',() =>{
        return request2.get('ibltest').then((response) => {
            expect(response.status).to.be.eq(200);
           console.log("RESPONSE CODE IS "+ response.status);
           return response;
            
        });
    });
    it('GET RESPONSE TIME',() =>{

                const start = performance.now();
                return request2.get('ibltest').then((response) => {
                    const end = performance.now();
                        const responseTime = end - start;
                        expect(responseTime).to.be.lessThan(1000);
                   console.log("RESPONSE TIME IS "+ responseTime);
                   return response;
                    
                });
            
            });  
     it('CHECK TITLE NOT NULL',() =>{

        
                return request2.get('ibltest').then((data) => {
                expect(data.title).to.not.be.null;
                console.log("NO NULL TITLES");
                   
                
                    
                });
            
            });  

     it('VERIFY EPISODE TYPE',() =>{
                    
             
            // //  return request2.get('ibltest').then((res ) => {
                

                
            // //     var episodes = res.query('$..episode[*].type');
            // //     expect(episodes).to.not.be.null;
            // //     res.body.episode.forEach(episode => {
            // //         expect(episode.type).to.be.eq("episode")
            // //    })
            // const response = request2.get('ibltest');
            // expect(response.body.elements)
            // .toEqual(expect.arrayContaining([expect.objectContaining({    //schedule.elements[*].episode.type
            //     episode: expect.objectContaining({type} ) })
            // ]));

                
            //     expect(response.type).to.not.be.null;
            //     // response.elements.forEach((type) => {
                
            //     // expect(type).to.be.eq("episode");
            
            //     console.log(response.body);
            //     });
             
                return request2.get('ibltest').then((data) => {
                    const type = data.getMaxListeners.channel.type;
                    console.log(type);

                });
            });


    }); //keep this bracket



