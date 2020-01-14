const verifyBed = 'Bedroom was successfully created'

function functBed(cy){
cy.get('#side-menu > :nth-child(3) > a').click()
cy.get('.btn-primary').click()
cy.get('#description').type('something')
cy.get('#floor').type('42')
cy.get('#number').type(Math.floor(Math.random() * 1000))
cy.get('#priceDaily').type('35')
cy.get('#bedroomStatusId').select('2')
cy.get('#typeBedroomId').select('2')
cy.get('#saveBtn').click()
cy.contains(verifyBed)
}


// exports 
module.exports ={
    functBed
}
