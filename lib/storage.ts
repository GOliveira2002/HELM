// ─────────────────────────────────────────
// HELM — Storage Layer (localStorage)
// ─────────────────────────────────────────

import { Project, Sprint, Task } from '@/types'

const KEYS = {
  projects: 'helm:projects',
  sprints:  'helm:sprints',
  tasks:    'helm:tasks',
} as const

// ── Helpers ───────────────────────────────

function load<T>(key: string): T[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T[]) : []
  } catch {
    return []
  }
}

function save<T>(key: string, data: T[]): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(key, JSON.stringify(data))
}

function generateId(): string {
  return crypto.randomUUID()
}

// ── Projects ──────────────────────────────

export const ProjectStorage = {
  getAll(): Project[] {
    return load<Project>(KEYS.projects)
  },

  getById(id: string): Project | undefined {
    return this.getAll().find((p) => p.id === id)
  },

  create(data: Omit<Project, 'id' | 'createdAt'>): Project {
    const project: Project = {
      ...data,
      id: generateId(),
      createdAt: new Date().toISOString(),
    }
    save(KEYS.projects, [...this.getAll(), project])
    return project
  },

  update(id: string, data: Partial<Omit<Project, 'id' | 'createdAt'>>): Project | null {
    const all = this.getAll()
    const index = all.findIndex((p) => p.id === id)
    if (index === -1) return null
    all[index] = { ...all[index], ...data }
    save(KEYS.projects, all)
    return all[index]
  },

  delete(id: string): void {
    save(KEYS.projects, this.getAll().filter((p) => p.id !== id))
    // cascade delete
    SprintStorage.deleteByProject(id)
    TaskStorage.deleteByProject(id)
  },
}

// ── Sprints ───────────────────────────────

export const SprintStorage = {
  getAll(): Sprint[] {
    return load<Sprint>(KEYS.sprints)
  },

  getByProject(projectId: string): Sprint[] {
    return this.getAll().filter((s) => s.projectId === projectId)
  },

  getById(id: string): Sprint | undefined {
    return this.getAll().find((s) => s.id === id)
  },

  create(data: Omit<Sprint, 'id'>): Sprint {
    const sprint: Sprint = { ...data, id: generateId() }
    save(KEYS.sprints, [...this.getAll(), sprint])
    return sprint
  },

  update(id: string, data: Partial<Omit<Sprint, 'id'>>): Sprint | null {
    const all = this.getAll()
    const index = all.findIndex((s) => s.id === id)
    if (index === -1) return null
    all[index] = { ...all[index], ...data }
    save(KEYS.sprints, all)
    return all[index]
  },

  delete(id: string): void {
    save(KEYS.sprints, this.getAll().filter((s) => s.id !== id))
    TaskStorage.unassignSprint(id)
  },

  deleteByProject(projectId: string): void {
    save(KEYS.sprints, this.getAll().filter((s) => s.projectId !== projectId))
  },
}

// ── Tasks ─────────────────────────────────

export const TaskStorage = {
  getAll(): Task[] {
    return load<Task>(KEYS.tasks)
  },

  getByProject(projectId: string): Task[] {
    return this.getAll().filter((t) => t.projectId === projectId)
  },

  getBySprint(sprintId: string): Task[] {
    return this.getAll().filter((t) => t.sprintId === sprintId)
  },

  getBacklog(projectId: string): Task[] {
    return this.getAll().filter((t) => t.projectId === projectId && t.sprintId === null)
  },

  getById(id: string): Task | undefined {
    return this.getAll().find((t) => t.id === id)
  },

  create(data: Omit<Task, 'id' | 'createdAt'>): Task {
    const task: Task = {
      ...data,
      id: generateId(),
      createdAt: new Date().toISOString(),
    }
    save(KEYS.tasks, [...this.getAll(), task])
    return task
  },

  update(id: string, data: Partial<Omit<Task, 'id' | 'createdAt'>>): Task | null {
    const all = this.getAll()
    const index = all.findIndex((t) => t.id === id)
    if (index === -1) return null
    all[index] = { ...all[index], ...data }
    save(KEYS.tasks, all)
    return all[index]
  },

  delete(id: string): void {
    save(KEYS.tasks, this.getAll().filter((t) => t.id !== id))
  },

  deleteByProject(projectId: string): void {
    save(KEYS.tasks, this.getAll().filter((t) => t.projectId !== projectId))
  },

  unassignSprint(sprintId: string): void {
    const all = this.getAll().map((t) =>
      t.sprintId === sprintId ? { ...t, sprintId: null } : t
    )
    save(KEYS.tasks, all)
  },
}