# Playwright BDD Framework

## Overview
This repository contains a **Playwright BDD Framework** that integrates Playwright with **Behavior-Driven Development (BDD)** using `playwright-bdd`. The framework enables writing **readable, maintainable, and scalable** automated test scripts for web applications using **TypeScript**.

## Features
- **Behavior-Driven Development (BDD)**: Uses **playwright-bdd and Gherkin** syntax for test scenarios.
- **Playwright Integration**: Enables fast and reliable browser automation.
- **TypeScript Support**: Provides type safety and better maintainability.
- **Page Object Model (POM)**: Implements reusable components for better test structure.
- **Environment Management**: Supports multiple environments using **DotEnv**.

## Project Structure
```
PlaywrightBDDFramework/
├── features/           # Gherkin feature files
├── src/
│   ├── steps/         # Step definitions
│   ├── pages/         # Page object model classes
│   ├── utils/         # Utility functions
├── testdata/          # Test data for scenarios
├── playwright.config.ts # Playwright configuration file
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

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
3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Running Tests
### Run all tests
```sh
npx playwright test
```

### Run tests in a specific feature file
```sh
npx playwright test features/sample.feature
```

### Run tests with a specific tag
```sh
npx playwright test --grep @smoke
```

### Run tests in headless mode
```sh
npx playwright test --headed=false
```

## Writing Tests
1. Define test scenarios in `features/` using **Gherkin syntax**.
2. Implement step definitions in `src/steps/`.
3. Use Playwright’s API in the step definitions for interactions.
4. Use assertions to validate expected outcomes.

### Sample Feature File (`features/sample.feature`)
```gherkin
Feature: Login Functionality

  Scenario: User logs in successfully
    Given the user is on the login page
    When the user enters valid credentials
    Then the user should be redirected to the dashboard
```

### Sample Step Definition (`src/steps/login.steps.ts`)
```typescript
import { Given, When, Then } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

Given('the user is on the login page', async function ({ page }) {
  await page.goto('https://example.com/login');
});

When('the user enters valid credentials', async function ({ page }) {
  const loginPage = new LoginPage(page);
  await loginPage.login('testuser', 'password123');
});

Then('the user should be redirected to the dashboard', async function ({ page }) {
  await expect(page).toHaveURL('https://example.com/dashboard');
});
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

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any queries or suggestions, feel free to reach out via GitHub Issues.

