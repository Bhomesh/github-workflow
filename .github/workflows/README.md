<div align="center">

# 🚀 GitHub Workflows

Automated CI/CD pipelines powering our development process

</div>

## 📊 Workflow Statuses

| Workflow | Status | Description |
|----------|--------|-------------|
| 🏭 Production | ![Production Workflow](https://github.com/Bhomesh/github-workflow/actions/workflows/prod.yml/badge.svg) | Handles production deployments |
| 🧪 Staging | ![Staging Workflow](https://github.com/Bhomesh/github-workflow/actions/workflows/stage.yml/badge.svg) | Manages staging environment |
| 🧹 ESLint | ![ESLint Workflow](https://github.com/Bhomesh/github-workflow/actions/workflows/eslint.yml/badge.svg) | Ensures code quality |
| 🧬 Testing | ![Testing Workflow](https://github.com/Bhomesh/github-workflow/actions/workflows/test.yml/badge.svg) | Runs test suites |
| 👋 Greetings | ![Greetings Workflow](https://github.com/Bhomesh/github-workflow/actions/workflows/greetings.yml/badge.svg) | Welcomes new contributors |
| ⏳ Temporary | ![Temporary Workflow](https://github.com/Bhomesh/github-workflow/actions/workflows/temp.yml/badge.svg) | For temporary tasks |

## 🔍 Workflow Details

<details>
<summary><b>🏭 prod.yml</b></summary>

- Triggers on: Push to main branch
- Main steps:
  1. Build application
  2. Run tests
  3. Deploy to production server
</details>

<details>
<summary><b>🧪 stage.yml</b></summary>

- Triggers on: Pull requests to main branch
- Main steps:
  1. Build application
  2. Run tests
  3. Deploy to staging environment
</details>

<details>
<summary><b>🧹 eslint.yml</b></summary>

- Triggers on: Push to any branch
- Main steps:
  1. Install dependencies
  2. Run ESLint
  3. Report issues
</details>

<details>
<summary><b>🧬 test.yml</b></summary>

- Triggers on: Push to any branch
- Main steps:
  1. Set up test environment
  2. Run unit tests
  3. Run integration tests
</details>

<details>
<summary><b>👋 greetings.yml</b></summary>

- Triggers on: First-time contributors
- Main steps:
  1. Detect first contribution
  2. Send welcome message
</details>

<details>
<summary><b>⏳ temp.yml</b></summary>

- Purpose: For temporary or experimental workflows
- Configure as needed for specific tasks
</details>

## 🤝 Contributing

Feel free to suggest improvements to our workflows by opening an issue or submitting a pull request!

<div align="center">

---

Made with 💖 by the [Bhomesh](https://github.com/Bhomesh) team

</div>
