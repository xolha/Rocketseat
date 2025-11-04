import Card from "./ui/card.tsx";
import InputCheckbox from "./ui/input-checkbox.tsx";
import Text from "./ui/text.tsx";
import ButtonIcon from "./ui/button-icon.tsx";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react";
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react";
import React from "react";
import InputText from "./ui/input-text.tsx";
import XIcon from "../assets/icons/X-Regular.svg?react";
import CheckIcon from "../assets/icons/Check-Regular.svg?react";
import Container from "./ui/container.tsx";
import {cx} from "class-variance-authority";
import {type Task, TaskState} from "../models/task.tsx";
import useTask from "../hooks/use-task.ts";

interface TaskItemProps {
    task: Task;
}

export default function TaskItem({task}: TaskItemProps) {
    const [isEditing, setEditing] = React.useState(task?.state === TaskState.Creating);

    const [taskTitle, setTaskTitle] = React.useState(task.title || "")
    const {updateTask, updateTaskStatus} = useTask()

    function handleEditTask() {
        // @ts-ignore
        setEditing(true);
    }

    function handleExitTask() {
        // @ts-ignore
        setEditing(false);
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || "");
    }

    function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        updateTask(task.id, {title: taskTitle})
        setEditing(false);
    }

    function handleChangeTaskStatus() {
        const checked = e.target.checked;

        updateTaskStatus(task.id, checked)
    }

    return (
        <Container>
            <Card size="md">
                {!isEditing ? /*"não está a editar então mostra o padrão*/
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <InputCheckbox
                                checked={task?.concluded}
                                onChange={handleChangeTaskStatus}
                            />
                            <Text className={cx("flex-1", {"line-through": task?.concluded})}>
                                {task?.title}
                            </Text>
                        </div>
                        <div className="flex gap-1">
                            <ButtonIcon icon={TrashIcon} variant="tertiary"/>
                            <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditTask}/>
                        </div>
                    </div>
                    : (
                        <form onSubmit={handleSaveTask} className="flex items-center justify-between gap-4">
                            <InputText
                                value={taskTitle}
                                className="flex-1"
                                onChange={handleChangeTaskTitle}
                                required
                                autoFocus
                            />
                            <div className="flex gap-1">
                                <ButtonIcon icon={XIcon} variant="secondary" onClick={handleExitTask}/>
                                <ButtonIcon type="submit" icon={CheckIcon} variant="primary"/>
                            </div>
                        </form>
                    )
                }
            </Card>
        </Container>
    )
}