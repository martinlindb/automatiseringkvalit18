const verifyFail = 'A persistence error occurred'

function functBill(cy){
    cy.get(':nth-child(4) > a').click()
    cy.get('.btn-primary').click()
    cy.get('#billStatusId').select('2')
    cy.get('#hotelReservationId').select('5')
    cy.get('#saveBtn').click()
    cy.contains(verifyFail)


}

// exports 
module.exports ={
    functBill
}