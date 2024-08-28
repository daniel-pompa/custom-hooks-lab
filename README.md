# Custom Hooks Lab

**Custom Hooks Lab** is a project designed to test and optimize React custom hooks. This environment provides a controlled and well-organized space to thoroughly evaluate the behavior, performance, and reliability of the hooks. It helps identify and resolve issues efficiently to ensure that the hooks function optimally in any scenario

## Table of Contents

1. [Requirements](#requirements)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Running the Tests](#running-the-tests)
6. [Adding a New Custom Hook](#adding-a-new-custom-hook)
7. [Contributing](#contributing)
8. [License](#license)
9. [Author](#author)
10. [Acknowledgements](#acknowledgements)

## Requirements

You need to have the following installed:

A source code editor such as [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), or any other editor of your choice.

[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F.svg?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![npm](https://img.shields.io/badge/npm-%23CB3837.svg?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/)

> [!NOTE]
> Clicking on the Node.js badge will take you to the Node.js website, where you can download the installer. It is recommended to use the stable version. When you install Node.js, npm will be installed automatically.

Check your Node.js and npm installation by running:

```bash
node --version
npm --version
```

## Technology Stack

The project utilizes the following technologies:

<div>
  <img src="https://skillicons.dev/icons?i=react" alt="React" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=jest" alt="Jest" width="40" height="40" />
</div>

In addition to these technologies, the project also employs **React Testing Library** to facilitate the testing of custom hooks, ensuring they behave as expected in various scenarios.

## Project Structure

The project is organized as follows:

```bash
├───📁 public/
├───📁 src/
│   ├───📁 assets/
│   ├───📁 hooks/
│   │   └───📁 tests/
│   ├───📄 App.css
│   ├───📄 App.jsx
│   ├───📄 index.css
│   └───📄 main.jsx
├───📄 eslint.config.js
├───📄 index.html
├───📄 package-lock.json
├───📄 package.json
├───📄 README.md
└───📄 vite.config.js
```

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/daniel-pompa/custom-hooks-lab.git
```

2. **Navigate to the project directory:**

```bash
cd custom-hooks-lab
```

3. **Install dependencies:**

```bash
npm install
```

## Running the Tests

You can run the tests for your custom hooks using the following command:

```bash
npm test
```

This will execute all test suites, providing you with detailed feedback on each custom hook's behavior.

## Adding a New Custom Hook

1. Create a new file in the `src/hooks` directory.
2. Write your custom hook.
3. Create a corresponding test file in the `src/hooks/tests` directory.
4. Run the tests to ensure everything works as expected.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.

[![MIT License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)

> [!NOTE]
> Clicking on the MIT License badge for see the LICENSE file for details.

## Author

This project is maintained and developed by **Daniel Pompa Pareja**.

## Acknowledgements

Special thanks to the [React](https://react.dev/) and [Jest](https://jestjs.io/) communities for their excellent tools and documentation.

I would also like to extend my sincere gratitude to:

[React Testing Library](https://testing-library.com/) for offering tools that enable testing React components in a way that closely resembles user interactions.

[Back to Top](#table-of-contents)
