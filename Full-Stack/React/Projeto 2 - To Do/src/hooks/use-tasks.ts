import useLocalStorage from "use-local-storage";
import {TASKS_KEY, TASK_STATE, type Task} from "../models/task.tsx";


export default function useTasks() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

    function prepareTask() {
        setTasks([
            ...tasks,
            {
                id: Math.random().toString(36).substring(2, 9),
                title: "",
                state: TASK_STATE.Creating,
                concluded: false,
            },
        ])
    }

    return {
        tasks,
        prepareTask,
    }
}