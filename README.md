### Cypress info:

- It is a tool built by front-end developesr for front-end developers. This doesn't mean that an automation engineer can not benefit from it.
- The tests can be run only in JavaScript.
- The tests can be run only on Chrome.
- It is so fast (because the code is executed by the browser).
- [Official documentation](https://docs.cypress.io/guides/core-concepts/interacting-with-elements)

### Setup:
#### Prerequisites:

- NPM and Node.js installed on your own machine (the version should be grater than 8)
- IDE (eg: Visual Studio Code)

#### Cypress setup:
- create a node project:

```
npm init -y
```

- install cypress:

```
npm install cypress@version
```
- to check if the setup is correctly done, run the following command in your terminal:

```
npx cypress open
```

### CLI:

- to run the tests in headless mode:
```
npx cypress run
```

- to run a specific test file: 
```
npx cypress run spec .\cypress\integration\todomvc-actions.spec.js
```

- in order to be good practicants of JS, we should made possible to run the tests just by using the `npm test` command. In order to do this, you should use the following snipped code in your `script` property os your package json:
```
"test": "cypress run"
```