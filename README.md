# Project Name

This project uses GitHub Actions for continuous integration and deployment. Below are the current statuses of our pipelines:

## Pipeline Statuses

| Pipeline | Status |
|----------|--------|
| Production | ![Production Workflow](https://github.com/Bhomesh/github-workflow/actions/workflows/prod.yml/badge.svg) |
| Staging | ![Staging Workflow](https://github.com/Bhomesh/github-workflow/actions/workflows/stage.yml/badge.svg) |
| ESLint | ![ESLint Workflow](https://github.com/Bhomesh/github-workflow/actions/workflows/eslint.yml/badge.svg) |
| Greetings | ![Greetings Workflow](https://github.com/Bhomesh/github-workflow/actions/workflows/greetings.yml/badge.svg) |

## About

This project demonstrates the use of GitHub Actions for continuous integration and deployment. It includes:

- ESLint checks for code quality
- Frontend testing to ensure the website is working
- A staging workflow for testing changes in non-main branches
- A production workflow for deploying changes from the main branch

## Workflows

### ESLint Workflow
The ESLint workflow runs on all branches and pull requests. It performs the following steps:
1. Runs ESLint checks on the codebase

### Staging Workflow
The staging workflow runs on all branches except `main`, but only if the ESLint workflow succeeds. It performs the following steps:
1. Tests if the frontend is working correctly
2. Notifies on successful completion of all tests

### Production Workflow
The production workflow runs on the `main` branch, but only if the ESLint workflow succeeds. It performs the following steps:
1. Tests if the frontend is working correctly
2. Deploys to production if all tests pass

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run ESLint: `npm run lint`
4. Start the frontend server: `npm start`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## License

This project is licensed under the MIT License.
