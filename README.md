<div align="center">

# ⚓ HELM — Hub for Execution, Learning & Milestones

## PM Command Center

**Open-source agile project management tool — runs entirely in your browser, no server required.**  
Built as a flagship portfolio project, focused on modern product and frontend engineering practices.

[![Status](https://img.shields.io/badge/status-in_development-yellow?style=flat-square)](https://github.com)
[![Stack](https://img.shields.io/badge/stack-Next.js-blue?style=flat-square)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)

</div>

---

## 🎯 What is HELM?

HELM is a lightweight project management application that runs **entirely on your machine** — no accounts, no servers, no internet connection required. Just open it and start managing your projects.

Data is stored locally in your browser via `localStorage`, keeping everything private and always available offline.

### What problems does it solve?

| Problem | HELM's Solution |
|---|---|
| Scattered sprint management | Sprint planner + drag & drop Kanban board |
| Lack of progress visibility | Burndown chart + velocity tracking |
| Inaccurate estimations | PERT estimation engine |
| Data locked in external tools | Everything stays on your machine |
| Forced sign-ups and subscriptions | Zero accounts, zero cost, forever |

---

## 🧱 Tech Stack

### Frontend
- **Next.js** — routing, SSR-ready structure and UI performance
- **Custom Design System** — consistent and reusable components
- **DnD Kit** — drag & drop for the Kanban board
- **Tailwind CSS** — utility-first styling

### Data Storage
- **localStorage** — all data stored locally in the browser, no database required

### DevOps
- **GitHub Actions** — CI/CD for linting and build checks

> No backend. No database. No authentication. No deployment needed.

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-user/helm.git
cd helm

# Install dependencies
npm install

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're ready to go.

---

## 🗺️ Roadmap

### ✅ Phase 1 — Foundation `2–3 weeks`
> Set up the project structure and base UI.

- [ ] Next.js project setup with Tailwind
- [ ] Base layout + navigation
- [ ] Design system (colors, typography, components)
- [ ] localStorage data layer
- [ ] CI/CD with GitHub Actions
- [ ] Initial README

---

### 🚧 Phase 2 — Core PM (Sprints) `3–4 weeks`
> Build the core agile project management features.

- [ ] Kanban board with drag & drop
- [ ] Project and sprint management
- [ ] Task CRUD (create, edit, delete, reorder)
- [ ] Sprint planner
- [ ] Simplified Timeline / Gantt
- [ ] Story points tracking + velocity

---

### 📈 Phase 3 — Analytics `2–3 weeks`
> Introduce metrics and performance insights.

- [ ] Estimation engine (PERT)
- [ ] Velocity dashboard
- [ ] Burndown chart
- [ ] Data export (CSV / PDF)

---

### 🔁 Phase 4 — GitHub Automation `1–2 weeks`
> Automate workflows around the repository.

- [ ] Auto-close stale issues
- [ ] Automatic CHANGELOG generation
- [ ] Stalled PRs alerts
- [ ] Webhooks for notifications
- [ ] Automatic release notes

---

### 🌍 Phase 5 — Portfolio & Documentation `1–2 weeks`
> Make the project presentable and public.

- [ ] Public landing page
- [ ] Interactive demo (video or GIF)
- [ ] Complete README with badges
- [ ] Technical blog in MDX (PM and engineering articles)

---

## 💡 Technical Decisions

| Decision | Rationale |
|---|---|
| **No backend** | Keeps the project simple and fully local |
| **localStorage** | Zero setup, works offline, data stays private |
| **Next.js** | Modern React framework, great DX, portfolio-worthy |
| **Tailwind CSS** | Fast styling, consistent design tokens |
| **CI/CD from day one** | Enforces best practices and avoids technical debt |
| **Analytics focus** | Differentiates the project from simple Kanban clones |

---

## 🚀 Project Value

This project demonstrates real frontend product engineering:

- **Complete frontend product** — from data layer to polished UI
- **No-backend architecture** — intentional simplicity, fully offline
- **Product thinking** — not just code, but user-driven decisions
- **Open-source and public** — open codebase, clear documentation, contributions welcome

---

## 📌 Future Extensions

- 💾 **JSON file export/import** — backup and restore your data
- 👥 **Multi-user / teams** — shared workspaces (would require a backend)
- ⚡ **Real-time sync (WebSockets)** — live collaboration
- 🤖 **ML for estimations** — predictive models based on historical data

---

## ❤️ Support the Project

If you find this project useful or interesting, there are several ways to contribute:

- ⭐ **Star the repo** on GitHub — it helps with visibility
- 🐛 **Report bugs** or suggest new features via Issues
- 🤝 **Contribute code** — PRs are always welcome
- 💸 **Support financially** via GoFundMe *(link to be added)*

> Your support helps keep development active and dedicate more time to new features.

---

<div align="center">

Made with ☕ and way too many late nights · [Issues](https://github.com) · [Discussions](https://github.com)

</div>
