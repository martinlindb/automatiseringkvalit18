
const loginTxtField = '#login'
const passTxtField = '#senha'
const loginBtn = '#loginBtn'


function functLogin(cy){
    cy.get(loginTxtField).clear()
    cy.get(loginTxtField).type('marc')
    cy.get(passTxtField).type('1010')
    cy.get(loginBtn).click()
}


// exports 
module.exports ={
    functLogin
}