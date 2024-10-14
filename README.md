<div align="center">

# 🚀 Github Workflows

[![Production Workflow](https://github.com/Bhomesh/github-workflow/actions/workflows/prod.yml/badge.svg)](https://github.com/Bhomesh/github-workflow/actions/workflows/prod.yml)
[![Staging Workflow](https://github.com/Bhomesh/github-workflow/actions/workflows/stage.yml/badge.svg)](https://github.com/Bhomesh/github-workflow/actions/workflows/stage.yml)
[![ESLint Workflow](https://github.com/Bhomesh/github-workflow/actions/workflows/eslint.yml/badge.svg)](https://github.com/Bhomesh/github-workflow/actions/workflows/eslint.yml)


A modern CI/CD pipeline demonstration using GitHub Actions

[Getting Started](#getting-started) •
[Workflows](#workflows) •
[Contributing](#contributing) •
[License](#license)

</div>

## 📋 About

This project showcases the power of GitHub Actions for continuous integration and deployment. It features:

- 🧹 ESLint checks for code quality
- 🌐 Frontend testing to ensure website functionality
- 🔍 Staging workflow for non-main branch testing
- 🚀 Production workflow for main branch deployment
- 🔄 Hourly README updates

## 🚀 Workflows

### ESLint Workflow
<details>
<summary>Click to expand</summary>

Runs on all branches and pull requests:
1. 🧹 Performs ESLint checks on the codebase
</details>

### Staging Workflow
<details>
<summary>Click to expand</summary>

Runs on all branches except `main`, after ESLint success:
1. 🌐 Tests frontend functionality
2. 📢 Notifies on successful test completion
</details>

### Production Workflow
<details>
<summary>Click to expand</summary>

Runs on the `main` branch, after ESLint success:
1. 🌐 Tests frontend functionality
2. 🚀 Deploys to production if all tests pass
</details>

### README Update Workflow
<details>
<summary>Click to expand</summary>

Runs every hour:
1. 🔄 Updates the README with the latest information
2. 📝 Commits and pushes changes if any were made
</details>

## 🏁 Getting Started

1. Clone the repository   ```
   git clone https://github.com/Bhomesh/github-workflow.git   ```
2. Install dependencies   ```
   npm install   ```
3. Run ESLint   ```
   npm run lint   ```
4. Start the frontend server   ```
   npm start   ```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<div align="center">
Made with ❤️ by <a href="https://github.com/Bhomesh">Bhomesh</a>
</div> 
