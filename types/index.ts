// ─────────────────────────────────────────
// HELM — Types
// ─────────────────────────────────────────

export interface Project {
  id: string
  name: string
  description: string
  createdAt: string
}

export interface Sprint {
  id: string
  projectId: string
  name: string
  goal: string
  startDate: string
  endDate: string
  status: 'planned' | 'active' | 'completed'
}

export type TaskStatus = 'backlog' | 'todo' | 'in-progress' | 'done'
export type TaskPriority = 'low' | 'medium' | 'high'

export interface Task {
  id: string
  projectId: string
  sprintId: string | null
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
  storyPoints: number
  createdAt: string
}