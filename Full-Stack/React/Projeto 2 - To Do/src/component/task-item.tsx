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
import {type Task, TASK_STATE} from "../models/task.tsx";

interface TaskItemProps {
    task: Task;
}

export default function TaskItem({task}: TaskItemProps) {
    const [isEditing, setEditing] = React.useState(task?.state === TASK_STATE.Creating);

    const [taskTitle, setTaskTitle] = React.useState(task?.title ?? "")

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
         console.log({id: task.id, title: taskTitle});

         setEditing(false);
    }

    return (
        <Container>
            <Card size="md" >
                {!isEditing ? /*"não está a editar então mostra o padrão*/
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <InputCheckbox
                                value={task?.concluded?.toString()}
                                checked={task?.concluded}
                            />
                            <Text className={cx("flex-1", { "line-through": task?.concluded})}>
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
                                className="flex-1"
                                onChange={handleChangeTaskTitle}
                                value={taskTitle}
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