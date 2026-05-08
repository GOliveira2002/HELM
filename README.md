<div align="center">

# ⚓ HELM — Hub for Execution, Learning & Milestones

## PM Command Center

**A native desktop app for agile project management — no accounts, no cloud, no subscriptions.**  
Everything runs on your machine. Your data stays yours.

[![Status](https://img.shields.io/badge/status-in_development-yellow?style=flat-square)](https://github.com)
[![Stack](https://img.shields.io/badge/stack-Tauri_+_React-blue?style=flat-square)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)

</div>

---

## 🎯 What is HELM?

HELM is a lightweight desktop application for agile teams and product managers who want a focused, distraction-free workspace — without the complexity of enterprise tools or the data privacy concerns of cloud platforms.

Open it. Manage your projects. Everything is stored locally on your machine.

---

## ✅ Current Features

### Projects
Create and organise multiple projects with colour coding and team members. Each project is independent, with its own sprints, tasks, and backlog.

### Kanban Board
Drag-and-drop task management across **To Do**, **In Progress**, and **Done**. Each task supports priority levels, assignees, due dates, story points, and notes — editable from a side panel without leaving the board.

### Sprint Management
Plan and track sprints with start and end dates. Mark sprints as planned, active, or completed. Tasks are scoped to sprints, so your board stays focused on what matters now.

### Analytics
Visual insights into your project's health — burndown charts, velocity per sprint, and task breakdowns by status, priority, and assignee. No configuration needed.

### Gantt Chart
Interactive timeline of sprints and tasks. Drag bars to move them, resize handles to adjust dates — changes are saved automatically.

### Requirements (MoSCoW)
Capture and prioritise requirements before committing to development. Each requirement has a MoSCoW classification, estimated hours, sprint assignment, and a one-click conversion to a board task.

### Team Members
Add members to each project and assign them to tasks. Member initials appear as avatars throughout the board and dashboard.

### Dashboard
A single-screen overview of all active sprints across all projects — progress bars, task counts, and a "needs attention" list for overdue or critical tasks.

---

## 🗺️ Roadmap

### 🚧 In development

**Requirements v2**
- Functional vs Non-Functional classification
- Group by Module and by Sprint
- Project tree view (Module → Requirement / Sprint → Requirement)

**Sprint Enhancements**
- Description field per sprint
- Daily Scrum notes — title, date, members present, content, and export

**Data Export**
- Excel export of Projects, Requirements, and Kanban tasks

**Team Roles**
- Member roles: Scrum Master, Product Owner, Developer, Viewer
- Role-based visibility and permissions

---

### 🌐 HELM Online *(planned)*

A collaborative cloud layer for teams that need to work together in real time — built on top of the same HELM experience.

**Authentication**
- Secure login via LUSOUSER

**Collaborative Workspace**
- Real-time co-editing of Requirements, Gantt, and Kanban
- Teams with shared projects and role management

**Daily Scrums Online**
- Meeting scheduling and invites via Zoom / Google Meet integration — LUSOMEET
- Digital sign-off on meeting minutes

**Requirements Voting**
- Team voting on requirements priority — async, no meetings required

**Methodologies**
- Lean support
- Hybrid methodology (Scrum + Kanban + custom flows)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js 18+](https://nodejs.org/)
- [Rust](https://rustup.rs/)

```bash
# Clone the repo
git clone https://github.com/your-user/helm.git
cd helm

# Install dependencies
npm install

# Run in development mode
npx tauri dev
```

### Build for distribution
```bash
npx tauri build
# Outputs installers for macOS (.dmg), Windows (.msi) and Linux (.AppImage)
```

---

## ❤️ Support the Project

- ⭐ **Star the repo** — helps with visibility
- 🐛 **Report bugs** or suggest features via [Issues](https://github.com)
- 🤝 **Contribute** — PRs are always welcome

---

<div align="center">

Made with ☕ and way too many late nights · [Issues](https://github.com) · [Discussions](https://github.com)

</div>