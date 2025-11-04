import Button from "./ui/button.tsx";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import TaskItem from "./task-item.tsx";

export default function TaskList() {
    const {tasks} = useTasks();
    const {prepareTask}  = useTasks();

    function handleNewTask() {
        prepareTask()
    }

    return (
        <>
            <section>
                <Button className="w-full" icon={PlusIcon}>
                    Nova tarefa
                </Button>
            </section>
            <section className="space-y-2">
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </section>
        </>
    )
}