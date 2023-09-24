// this file is created after a tutorial from TestAutomationUniversity (https://testautomationu.applitools.com/cypress-tutorial/chapter7.html)
/// <reference types="cypress" />

describe('filtering',()=>{
    beforeEach(()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.todo-list').should('not.have.descendants', 'li') // this is checking if the ul list (todo.list) have no descendats
        cy.get('.new-todo').type("Clean room{enter}")
        cy.get('.new-todo').type("Learn JS{enter}")
        cy.get('.new-todo').type("Use Cypress{enter}")

        cy.get('.todo-list li:nth-child(2) .toggle').click() // if you look into this selector, you can see that the selection is 
        // pretty much the same as xpath, they go deeper into the element. The .todo-list have li as elements and a toggle
        // cy.get(':nth-child(2) > .view > .toggle').click()
    })
    it('it should filter active todos', () => {
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length',2)
    });
    it('it should filter active todos', () => {
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length',3)
    });
    it('it should filter active todos', () => {
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length',1)
    });
})