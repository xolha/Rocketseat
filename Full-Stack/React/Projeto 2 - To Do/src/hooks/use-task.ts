import useLocalStorage from "use-local-storage";
import {TASKS_KEY, type Task} from "../models/task.tsx";

export default function useTask() {
    const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

    return {
        tasks,
        tasksCount: tasks.length,
        concludeTaskCount: tasks.filter((task) => task.concluded).length,
    }
}