/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('localhost:4567')
  });

  it('has buttons', () => {
    // https://on.cypress.io/type
    cy.get('.orange-flat-button')
      .should('have.text', 'Change it up')

    cy.get('.peter-river-flat-button')
      .should('have.text', 'Gimme the Recipe')

    cy.get('.grain > .name').click();
  });

  it('Changes grains when you change the recipe', () => {
    cy.get('.grain > .name').then(grainLabel => {
      const originalText = grainLabel.text();
      cy.get('.orange-flat-button').click();
      cy.get('.grain > .name').then(grainLabel => {
        const newText = grainLabel.text();
        expect(newText).to.not.equal(originalText);
      });
    });
  });

  it('Changes first veggie when you change the recipe', () => {
    Array(100).fill().map(() => {
      cy.get('.veggie-1 > .name').then(veggieLabel => {
        const originalText = veggieLabel.text();
        cy.get('.orange-flat-button').click();
        cy.get('.veggie-1 > .name').then(veggieLabel => {
          const newText = veggieLabel.text();
          expect(newText).to.not.equal(originalText);
        });
      });
    });
  });

  it('Changes second veggie when you change the recipe', () => {
    Array(100).fill().map(() => {
      cy.get('.veggie-2 > .name').then(veggieLabel => {
        const originalText = veggieLabel.text();
        cy.get('.orange-flat-button').click();
        cy.get('.veggie-2 > .name').then(veggieLabel => {
          const newText = veggieLabel.text();
          expect(newText).to.not.equal(originalText);
        });
      });
    });
  });

  it('Changes does not allow veggie 1 and veggie 2 to be the same', () => {
    cy.get('.veggie-1 > .name').then(veggie1Label => {
      cy.get('.veggie-2 > .name').then(veggie2Label => {
        const veggieText1 = veggie1Label.text();
        const veggieText2 = veggie2Label.text();

        expect(veggieText1).to.not.equal(veggieText2);
      });
    });
  });
});
