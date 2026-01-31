
# Singlish → Sinhala Translator Automated Testing (Playwright)

This repository contains automated functional and UI tests for the Singlish-to-Sinhala transliteration system available at:

https://www.swifttranslator.com/

The objective of this project is to assess:
- Accuracy of Singlish to Sinhala conversion
- Robustness under different input conditions
- UI behavior such as real-time output updating and input handling

This project was developed as part of an academic testing assignment using Playwright.

---

## Tools & Technologies
- Node.js
- Playwright Test
- Visual Studio Code
- GitHub

---

## Prerequisites
- Node.js (latest LTS recommended)
- npm (included with Node.js)

Clone this repository:
```sh
git clone https://github.com/JasonPerera30/Test1234.git
```

---

## 📸 Test Reports

HTML test reports are generated in:
`playwright-report/index.html`

---

## 🧪 Playwright Test Execution Guide

```bash
# Run all tests
npx playwright test

# View HTML test report
npx playwright show-report
```

---

## 📁 Project Structure

```text
Test1234/
├─ tests/
│  └─ swift-translator-tests.spec.js   # Main Playwright test cases
├─ playwright.config.js                # Playwright configuration file
├─ package.json                        # Project dependencies
├─ playwright-report/                  # HTML test reports
├─ test-results/                       # Raw test result data
└─ README.md                           # Project documentation
```

---
