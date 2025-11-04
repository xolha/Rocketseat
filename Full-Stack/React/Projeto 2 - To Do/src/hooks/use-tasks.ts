import useLocalStorage from "use-local-storage";
import {TASKS_KEY, TaskState} from "../models/task.tsx";


export default function useTasks() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

    function prepareTask(task: Task) {
        setTasks([...tasks, {
            id: Math.random().toString(36).substring(2, 9), /* forma simlpes de criar id no frontr nf */
            title:"",
            state: TaskState.Creating}])
    }

    return {
        prepareTask,
    }
}