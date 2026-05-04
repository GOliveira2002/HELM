# HELM - PM Command Center
Ferramenta open-source de gestão de projetos — pensada como projeto flagship para portfólio técnico, com foco em práticas modernas de produto, engenharia e DevOps.

---

## 🎯 Objetivo

Construir uma aplicação completa de gestão de projetos (estilo Jira/Linear simplificado), cobrindo:

- Planeamento de sprints
- Gestão de tarefas
- Métricas de performance (velocity, burndown)
- Automação de workflows via GitHub
- Documentação e exposição pública do projeto

---

## ❤️ Apoiar o Projeto

Se achas este projeto útil ou interessante, podes apoiar o seu desenvolvimento:

- 💸 GoFundMe: *(adicionar link aqui)*
- ⭐ Dar uma estrela no GitHub
- 🐛 Reportar bugs ou sugerir features
- 🤝 Contribuir com código

> O apoio ajuda a manter o desenvolvimento ativo, melhorar infraestruturas e dedicar mais tempo a novas funcionalidades.

---

## 🧱 Stack Tecnológica

### Frontend
- Next.js (mono-repo)
- Design System custom
- Drag & Drop (DnD Kit)

### Backend
- FastAPI
- API REST

### Base de Dados
- PostgreSQL
- ORM: Prisma ou SQLAlchemy

### Autenticação
- JWT + refresh tokens

### DevOps
- GitHub Actions (CI/CD)
- Deploy: Vercel + Railway

### Extras
- CLI em Python (estimativas)
- Exportação CSV/PDF
- Webhooks (integrações)

---

## 🗺️ Roadmap

### 🧩 Fase 1 — Fundação (2–3 semanas)

**Objetivo:** Criar a base técnica e estrutural do projeto.

- Mono-repo com Next.js + FastAPI  
- Setup de base de dados (PostgreSQL + ORM)  
- Sistema de autenticação (JWT + refresh tokens)  
- Design system + layout base  
- CI/CD com GitHub Actions  
- README inicial do projeto  

---

### 📊 Fase 2 — Core PM (Sprints) (3–4 semanas)

**Objetivo:** Implementar funcionalidades principais de gestão ágil.

- Kanban board (drag & drop)  
- Modelo de dados para sprints  
- API REST de tarefas  
- Sprint planner  
- Timeline / Gantt simplificado  
- Tracking de story points + velocity  

---

### 📈 Fase 3 — Analytics (2–3 semanas)

**Objetivo:** Introduzir métricas e análise de performance.

- Motor de estimativas (ex: PERT)  
- CLI de estimativas em Python  
- Dashboard de velocidade  
- Burndown chart  
- Exportação de dados (CSV/PDF)  

---

### 🔁 Fase 4 — Automação GitHub (1–2 semanas)

**Objetivo:** Integrar workflows automáticos com GitHub.

- Auto-close de issues antigas  
- Geração automática de CHANGELOG  
- Alertas de PRs parados  
- Webhooks para notificações  
- Release notes automáticas  

---

### 🌍 Fase 5 — Portfólio & Documentação (1–2 semanas)

**Objetivo:** Tornar o projeto apresentável e público.

- Landing page pública  
- Demo interativa (vídeo ou GIF)  
- Deploy (Vercel + Railway)  
- README completo com badges  
- Blog técnico (MDX com artigos de PM/engenharia)  

---

## 📦 Scope Funcional (Resumo)

O produto final deverá permitir:

- Criar e gerir projetos e sprints  
- Organizar tarefas num Kanban board  
- Planear trabalho com base em estimativas  
- Monitorizar performance da equipa  
- Integrar com GitHub para automação  
- Exportar dados e relatórios  

---

## 💡 Notas e Decisões

- **Mono-repo** facilita consistência entre frontend e backend  
- **FastAPI** escolhido pela performance e simplicidade  
- **Next.js** permite SSR e boa experiência de UI  
- **JWT com refresh tokens** garante segurança sem complexidade excessiva  
- **CI/CD desde início** força boas práticas desde cedo  
- **Foco em métricas (Analytics)** diferencia o projeto de simples clones de Kanban  

---

## 🚀 Valor do Projeto

Este projeto demonstra:

- Capacidade de construir um produto end-to-end  
- Integração de múltiplas tecnologias modernas  
- Boas práticas de arquitetura e DevOps  
- Pensamento de produto (não apenas código)  

---

## 📌 Possíveis Extensões Futuras

- Multi-user / equipas  
- Permissões (RBAC)  
- Integração com Slack/Discord  
- Machine Learning para estimativas  
- Tempo real (WebSockets)  

---
