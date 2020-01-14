// Importing from pages
import * as indexPg from '../pages/index'
import * as bedroomPg from '../pages/bedroom'
import * as clientPg from '../pages/client'
import * as editclientPg from '../pages/editclient'
import * as billPg from '../pages/bill'
import * as userPg from '../pages/user'




// Defining the test suite
describe('Test suite', function(){

    // First test case
    beforeEach(() =>{
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml') 
            indexPg.functLogin(cy)
                   
    })

    it('Create Bed', function(){
        bedroomPg.functBed(cy)
    })

    it('Create Client', function(){
        clientPg.functClient(cy)
    })

    it('Edit Client', function(){
        editclientPg.functEditc(cy)
    })
    it('Create Bill', function(){
        billPg.functBill(cy)
    })
    it('Create User', function(){
        userPg.functUser(cy)
    })


})