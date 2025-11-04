import useLocalStorage from "use-local-storage";
import {TASKS_KEY, type Task, TaskState} from "../models/task.tsx";

export default function useTask() {
    const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

    return {
        tasks,
        tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
        concludeTaskCount: tasks.filter((task) => task.concluded).length,
    }
}