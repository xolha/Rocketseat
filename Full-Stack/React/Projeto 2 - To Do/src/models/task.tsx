export const TASKS_KEY = 'tasks'

export const TASK_STATE = {
    Creating: 'creating',
    Created: 'created',
} as const;

export type TaskState = typeof TASK_STATE[keyof typeof TASK_STATE];

export interface Task {
    id: string
    title: string
    state?: TaskState
    concluded?: boolean
}