import useLocalStorage from "use-local-storage";
import {type Task, TASKS_KEY, TaskState} from "../models/task.tsx";


export default function useTasks() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

    function prepareTask() {
        setTasks([
            ...tasks,
            {
                id: Math.random().toString(36).substring(2, 9),
                title: "",
                state: TaskState,
                concluded: false,
            },
        ])
    }

    function updateTask(id: string, payload: {title: Task['title']}) {
        setTasks(task.map(task => task.id === id ? {...task, state: TaskState.Created, ...payload} : task))
    }

    function updateTasksTatus(id: string, concluded: boolean) {
        setTasks(
            tasks.map(task => task.id === id ? {...task, concluded} : task)
        )
    }

    function deleteTask(id: string) {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return {
        prepareTask,
        updateTask,
        updateTasksTatus,
        deleteTask
    }
}