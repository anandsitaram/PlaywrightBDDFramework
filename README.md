# Playwright BDD Framework

## Overview
This is **Playwright BDD Framework** that integrates Playwright with **Behavior-Driven Development (BDD)** using `playwright-bdd`. The framework enables writing **readable, maintainable, and scalable** automated test scripts for web applications using **TypeScript**.

## Features
- **Behavior-Driven Development (BDD)**: Uses **playwright-bdd and Gherkin** syntax for test scenarios.
- **Playwright Integration**: Enables fast and reliable browser automation.
- **TypeScript Support**: Provides type safety and better maintainability.
- **Page Object Model (POM)**: Implements reusable components for better test structure.
- **Environment Management**: Supports multiple environments using **DotEnv**.

## Project Structure

- [features](./features) - Contains feature files.
- [src](./src)  - Contains source code for steps ,pageobjects and fixtures.
- [utils](./utils) - Utility functions.  
- [testdata](./testdata) - Test data files in json
- [playwright.config.ts](./playwright.config.ts) - Playwright configuration settings.  
- [tsconfig.json](./tsconfig.json) - TypeScript configuration file.  
- [package.json](./package.json) - Defines dependencies and scripts.  
- [README.md](./README.md) - Project documentation.  

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/anandsitaram/PlaywrightBDDFramework.git
   cd PlaywrightBDDFramework
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
## Tools and Technologies Used
- **Playwright** - Browser automation framework for fast and reliable testing.
- **TypeScript** - Ensures type safety and maintainability.
- **Node.js** - Runtime environment for executing tests.
- **Playwright-BDD** - Enables BDD-style test scripting.
- **DotEnv** - Manages multiple environment configuratio


## Running Tests
To run a specific feature file, update the `playwright.config.ts` file as shown below:

```ts
const testDir = defineBddConfig({
  features: 'features/login.feature',
  tags: '@smoke'
});
```
Use the following command to run tests:
```sh
npm run test 
```


## Configuration
The **`playwright.config.ts`** file contains configuration settings for browsers, base URLs, test timeouts, and more. Modify it as needed for different environments.

## Reporting
- Playwright supports **HTML and JSON reports**.
- Use the following command to generate a report:
  ```sh
  npx playwright test --reporter=html
  ```
- Open the report:
  ```sh
  npx playwright show-report
  ```

## CI/CD Integration
The framework can be easily integrated into **GitHub Actions**, **Jenkins**, or **GitLab CI/CD**.


