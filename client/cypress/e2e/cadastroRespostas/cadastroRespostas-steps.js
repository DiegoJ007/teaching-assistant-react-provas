const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("eu estou logado como {string} com o login {string}", (perfil, login) => {
  cy.intercept("GET", "**/api/questions", { statusCode: 200, body: [] }).as("getQuestions");
  cy.visit("/");
  cy.get('[data-testid="exams-tab"]').click();
  cy.get('[data-cy="usuario-logado"]')
    .should("be.visible")
    .and("contain.text", login)
    .and("contain.text", perfil);
});

Given("eu estou na página {string}", (pagina) => {
  cy.get("body").then(($body) => {
    if (pagina === "Formulário da 1ª EE" && $body.find('[data-cy="pagina-Formulário da 1ª EE"]').length === 0) {
      cy.get('[data-cy="selecionar-1ª EE"]').click();
    }
  });
  cy.get(`[data-cy="pagina-${pagina}"]`).should("be.visible");
});

Given("eu permaneço na página {string}", (pagina) => {
  cy.get(`[data-cy="pagina-${pagina}"]`).should("be.visible");
});

Given("eu vejo a avaliação {string} com o status {string}", (avaliacao, status) => {
  cy.get(`[data-cy="status-${avaliacao}"]`).then(($el) => {
    if (status === "Respondida" && $el.text().trim() !== "Respondida") {
      cy.get(`[data-cy="marcar-respondida-${avaliacao}"]`).click({ force: true });
    }
  });
  cy.get(`[data-cy="status-${avaliacao}"]`).should("be.visible").and("have.text", status);
});

Given("eu vejo o campo {string} vazio", (campo) => {
  cy.get(`[data-cy="campo-${campo}"]`).should("be.visible").and("have.value", "");
});

Given(
  "eu vejo os campos {string}, {string}, {string} e {string} vazios",
  (c1, c2, c3, c4) => {
    [c1, c2, c3, c4].forEach((campo) => {
      cy.get(`[data-cy="campo-${campo}"]`).should("be.visible").and("have.value", "");
    });
  }
);

Given("eu vejo o campo {string} preenchido com {string}", (campo, valor) => {
  cy.get(`[data-cy="campo-${campo}"]`).then(($input) => {
    if ($input.val() === "") {
      cy.wrap($input).clear().type(valor);
    }
  });
  cy.get(`[data-cy="campo-${campo}"]`).should("be.visible").and("have.value", valor);
});

When("eu seleciono a avaliação {string}", (avaliacao) => {
  cy.get(`[data-cy="selecionar-${avaliacao}"]`).click();
});

When("eu preencho o campo {string} com {string}", (campo, valor) => {
  cy.get(`[data-cy="campo-${campo}"]`).clear().type(valor).should("have.value", valor);
});

When("eu seleciono a opção {string}", (opcao) => {
  cy.get(`[data-cy="opcao-${opcao}"]`).click();
});

Then("eu vejo a mensagem {string}", (mensagem) => {
  cy.get('[data-cy="mensagem-sucesso"]').should("be.visible").and("contain.text", mensagem);
});

Then("eu vejo a mensagem de erro {string}", (mensagem) => {
  cy.get('[data-cy="mensagem-erro"]').should("be.visible").and("contain.text", mensagem);
});
