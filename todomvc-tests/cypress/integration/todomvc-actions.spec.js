/// <reference types="cypress" />

describe('todo actions', ()=>{
    beforeEach(()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.todo-list').should('not.have.descendants', 'li') //this is checking if the ul list (todo.list) have no descendats
        cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}") //this will tipe the `Clean room` test in the new-todo list,
        //which is a label, and then it will press the enter. The enter is made by using the {enter} marker
    })
    it('should add a new todo  to the list', () => {
        
       
        cy.get('label').should('have.text', 'Clean room') // checks if the label have the text `Clean room`
        cy.get('.toggle').should('not.be.checked') //checks if the toggle is not checked before
    });
    
    it('should mark a todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through') 
    });
    
    it('should clear the todo list', () => {
        cy.get('.toggle').click()
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    });
})
