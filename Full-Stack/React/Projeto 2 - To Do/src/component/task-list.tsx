import Button from "./ui/button.tsx";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import TaskItem from "./task-item.tsx";
import useTasks from "../hooks/use-tasks.ts";

export default function TaskList() {
    const {tasks, prepareTask} = useTasks();

    function handleNewTask() {
        prepareTask()
    }

    return (
        <>
            <section>
                <Button className="w-full" icon={PlusIcon} onClick={handleNewTask}>
                    Nova tarefa
                </Button>
            </section>
            <section className="space-y-2">
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </section>
        </>
    )
}