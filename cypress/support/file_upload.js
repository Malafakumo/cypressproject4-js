let abc

before('', function () {
    cy.fixture('example').then(function (xyz) {
        abc = xyz
    })
})



Cypress.Commands.add("clickFileUploadButton", function () {
    cy.get(abc.fileUpload).click()
})

Cypress.Commands.add("attachPdfFile", function () {
    cy.get(abc.chooseFileButton).should('be.visible').attachFile(abc.docFile)
})

Cypress.Commands.add("clickSendFile", function () {
    cy.get(abc.sendFileButton).should('be.visible').click()
})