describe("File Upload Test", function () {

  it("upload a file", function () {
    cy.clickFileUploadButton()
    cy.attachPdfFile()
    cy.clickSendFile()
  })



})