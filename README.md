<div align="center">

# ⚓ HELM — Hub for Execution, Learning & Milestones

## PM Command Center

**Open-source agile project management tool**  
Built as a flagship portfolio project, focused on modern product, engineering and DevOps practices.

[![Status](https://img.shields.io/badge/status-in_development-yellow?style=flat-square)](https://github.com)
[![Stack](https://img.shields.io/badge/stack-Next.js_+_FastAPI-blue?style=flat-square)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)

</div>

---

## 🎯 What is HELM?

HELM is a full-featured project management application in the style of **Jira / Linear**, but simplified, open-source, and built from scratch with modern product and engineering best practices.

The goal isn't just to build another Kanban clone — it's to create a platform that demonstrates **real product thinking**, with performance metrics, workflow automation, and a scalable end-to-end architecture.

### What problems does it solve?

| Problem | HELM's Solution |
|---|---|
| Scattered sprint management | Sprint planner + drag & drop Kanban board |
| Lack of progress visibility | Burndown chart + velocity tracking |
| Inaccurate estimations | PERT estimation engine + CLI |
| Manual GitHub work | Automated issues, PRs and changelogs |
| Data locked in the tool | CSV / PDF export |

---

## 🧱 Tech Stack

### Frontend
- **Next.js** — SSR, routing and UI performance
- **Custom Design System** — consistent and reusable components
- **DnD Kit** — drag & drop for the Kanban board

### Backend
- **FastAPI** — high-performance REST API, easy to scale
- **PostgreSQL** — robust relational database
- **Prisma or SQLAlchemy** — ORM (decision to be made in Phase 1)

### Auth & Security
- **JWT + Refresh Tokens** — stateless, secure authentication without unnecessary complexity

### DevOps
- **GitHub Actions** — CI/CD from the very first commit
- **Vercel** — frontend deployment
- **Railway** — backend and database deployment

### Extras
- **Python CLI** — time estimations via command line
- **Webhooks** — integrations with external services
- **CSV / PDF Export** — data always accessible

---

## 🗺️ Roadmap

### ✅ Phase 1 — Foundation `2–3 weeks`
> Build the solid technical and structural base of the project.

- [ ] Mono-repo with Next.js + FastAPI
- [ ] Database setup (PostgreSQL + ORM)
- [ ] Authentication system (JWT + refresh tokens)
- [ ] Design system + base layout
- [ ] CI/CD with GitHub Actions
- [ ] Initial project README

---

### 🚧 Phase 2 — Core PM (Sprints) `3–4 weeks`
> Implement the core agile project management features.

- [ ] Kanban board with drag & drop
- [ ] Sprint data model
- [ ] Tasks REST API (full CRUD)
- [ ] Sprint planner
- [ ] Simplified Timeline / Gantt
- [ ] Story points tracking + velocity

---

### 📈 Phase 3 — Analytics `2–3 weeks`
> Introduce metrics and team performance analysis.

- [ ] Estimation engine (PERT)
- [ ] Python estimation CLI
- [ ] Velocity dashboard
- [ ] Burndown chart
- [ ] Data export (CSV / PDF)

---

### 🔁 Phase 4 — GitHub Automation `1–2 weeks`
> Integrate automated workflows with GitHub.

- [ ] Auto-close stale issues
- [ ] Automatic CHANGELOG generation
- [ ] Stalled PRs alerts
- [ ] Webhooks for notifications
- [ ] Automatic release notes

---

### 🌍 Phase 5 — Portfolio & Documentation `1–2 weeks`
> Make the project presentable, public and impressive.

- [ ] Public landing page
- [ ] Interactive demo (video or GIF)
- [ ] Full deployment (Vercel + Railway)
- [ ] Complete README with badges
- [ ] Technical blog in MDX (PM and engineering articles)

---

## 💡 Technical Decisions

| Decision | Rationale |
|---|---|
| **Mono-repo** | Consistency between frontend and backend; simpler deployments |
| **FastAPI** | Performance, modern Python typing, automatic docs (OpenAPI) |
| **Next.js** | SSR for SEO and performance, excellent DX |
| **JWT + refresh tokens** | Solid security without server-side session overhead |
| **CI/CD from day one** | Enforces best practices and avoids technical debt |
| **Analytics focus** | Differentiates the project from simple Kanban clones |

---

## 🚀 Project Value

This project demonstrates real product engineering capability:

- **End-to-end product** — from data model to production deployment
- **Multiple integrated technologies** — frontend, backend, database, DevOps
- **Architecture best practices** — separation of concerns, CI/CD, testing
- **Product thinking** — not just code, but user-driven decisions
- **Open-source and public** — open codebase, clear documentation, contributions welcome

---

## 📌 Future Extensions

- 👥 **Multi-user / teams** — shared workspaces with permissions
- 🔐 **RBAC** — granular role-based access control
- 💬 **Slack / Discord integration** — real-time notifications
- 🤖 **ML for estimations** — predictive models based on historical data
- ⚡ **Real-time (WebSockets)** — live updates on the Kanban board

---

## ❤️ Support the Project

If you find this project useful or interesting, there are several ways to contribute:

- ⭐ **Star the repo** on GitHub — it helps with visibility
- 🐛 **Report bugs** or suggest new features via Issues
- 🤝 **Contribute code** — PRs are always welcome
- 💸 **Support financially** via GoFundMe *(link to be added)*

> Your support helps keep development active, improve infrastructure and dedicate more time to new features.

---

<div align="center">

Made with ☕ and way too many late nights · [Issues](https://github.com) · [Discussions](https://github.com)

</div>
