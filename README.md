<div align="center">

# ⚓ HELM — Hub for Execution, Learning & Milestones

## PM Command Center

**Open-source agile project management tool — runs as a native desktop app, no cloud required.**  
Built as a flagship portfolio project, focused on modern product and desktop engineering practices.

[![Status](https://img.shields.io/badge/status-in_development-yellow?style=flat-square)](https://github.com)
[![Stack](https://img.shields.io/badge/stack-Tauri_+_React-blue?style=flat-square)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)

</div>

---

## 🎯 What is HELM?

HELM is a lightweight **desktop application** for agile project management — no accounts, no servers, no internet connection required. Install it, open it, and start managing your projects.

Data is stored in a local **SQLite database** on your machine (`~/Documents/helm/helm.db`), keeping everything private, persistent, and always available offline — unaffected by browser cache clears or browser updates.

### What problems does it solve?

| Problem | HELM's Solution |
|---|---|
| Scattered sprint management | Sprint planner + drag & drop Kanban board |
| Lack of progress visibility | Burndown chart + velocity tracking |
| Inaccurate estimations | PERT estimation engine |
| Data locked in external tools | Everything stays on your machine, in a portable `.db` file |
| Forced sign-ups and subscriptions | Zero accounts, zero cost, forever |
| Browser-dependent storage | Native desktop app — SQLite survives any browser clear |

---

## 🧱 Tech Stack

### Frontend (UI Layer)
- **React + TypeScript** — component-driven UI with full type safety
- **Vite** — fast dev server and bundler (replaces Next.js in desktop context)
- **Custom Design System** — consistent and reusable components
- **DnD Kit** — drag & drop for the Kanban board
- **Tailwind CSS** — utility-first styling

### Backend (Native Layer)
- **Tauri** — Rust-powered desktop runtime; bridges the React UI to the OS
- **SQLite** (via `rusqlite`) — persistent local database, stored as a single `.db` file on disk
- **Rust** — handles all file system access, database queries, and native OS integration

### DevOps
- **GitHub Actions** — CI/CD for linting, build checks, and automated releases
- **Tauri Bundler** — cross-platform builds (`.dmg`, `.exe`, `.AppImage`) from a single command

> No server. No cloud. No authentication. Data lives on your machine.

---

## 🏗️ Architecture

```
┌─────────────────────────────────┐
│         React (TypeScript)      │  ← All UI: Kanban, charts, forms
│         Tailwind + DnD Kit      │
└────────────┬────────────────────┘
             │  Tauri IPC (invoke commands)
┌────────────▼────────────────────┐
│         Rust (Tauri backend)    │  ← Business logic, file system access
│         rusqlite + SQLite       │
└────────────┬────────────────────┘
             │
┌────────────▼────────────────────┐
│    ~/Documents/helm/helm.db     │  ← Persistent local database
└─────────────────────────────────┘
```

The React layer calls Tauri commands (like `get_sprints`, `create_task`) via `invoke()`. Rust handles the SQLite queries and returns typed data back to the UI. The database file persists independently of any browser or web context.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js 18+](https://nodejs.org/)
- [Rust](https://rustup.rs/) (installed via `rustup`)
- [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites)

```bash
# Clone the repo
git clone https://github.com/your-user/helm.git
cd helm

# Install frontend dependencies
npm install

# Install Tauri CLI
cargo install tauri-cli

# Run in development mode (hot-reload UI + native backend)
cargo tauri dev
```

### Building a distributable
```bash
cargo tauri build
# Outputs: src-tauri/target/release/bundle/
# → helm.dmg (macOS), helm_setup.exe (Windows), helm.AppImage (Linux)
```

---

## 🗺️ Roadmap

### ✅ Phase 1 — Foundation `2–3 weeks`
> Set up the project structure, Tauri bridge, and base UI.

- [ ] Tauri + React + TypeScript project setup
- [ ] Base layout + navigation
- [ ] Design system (colors, typography, components)
- [ ] SQLite schema + Rust data layer (`rusqlite`)
- [ ] Tauri IPC commands for basic CRUD
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
- [ ] Data export (CSV / JSON backup)

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
| **Tauri over Electron** | ~10MB binary vs ~150MB; Rust backend is more impressive and performant |
| **SQLite over localStorage** | Persistent on disk, survives browser clears, portable, queryable |
| **SQLite over IndexedDB** | IndexedDB can still be wiped by browser settings; `.db` file cannot |
| **React + Vite (not Next.js)** | No SSR needed in a desktop app; Vite is faster and lighter |
| **Rust for native layer** | Demonstrates cross-language knowledge (TypeScript + Rust) |
| **CI/CD from day one** | Enforces best practices and enables automated releases |
| **Analytics focus** | Differentiates the project from simple Kanban clones |

---

## 🚀 Project Value

This project demonstrates real full-stack desktop engineering:

- **Cross-language architecture** — TypeScript UI + Rust native backend
- **Persistent local-first data** — SQLite on disk, zero cloud dependency
- **Native desktop distribution** — installable binary on macOS, Windows, and Linux
- **Product thinking** — not just code, but user-driven decisions
- **Open-source and public** — clear documentation, contributions welcome

---

## 📌 Future Extensions

- 🔄 **JSON/CSV import** — migrate data from Jira, Linear, or Notion
- 👥 **Multi-user / teams** — shared workspaces via a local network server
- ⚡ **Real-time sync** — optional cloud backup (user-controlled)
- 🤖 **ML for estimations** — predictive models based on historical velocity data

---

## ❤️ Support the Project

If you find this project useful or interesting, there are several ways to contribute:

- ⭐ **Star the repo** on GitHub — it helps with visibility
- 🐛 **Report bugs** or suggest new features via Issues
- 🤝 **Contribute code** — PRs are always welcome

---

<div align="center">

Made with ☕ and way too many late nights · [Issues](https://github.com) · [Discussions](https://github.com)

</div>
