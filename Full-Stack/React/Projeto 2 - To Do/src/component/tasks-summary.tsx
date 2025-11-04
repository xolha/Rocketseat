import Text from "./ui/text.tsx";
import Badge from "./ui/badge.tsx";

export default function TasksSummary() {
    const { taskCount, concludedTasksCount } = useTasks();

    return (
        <>
            <div className="flex items-center m-2 gap-1">
                <Text variant="body-sm-bold" className="text-gray-300">Tarefas criadas</Text>
                <Badge variant="secondary">
                    {taskCount}
                </Badge>
            </div>
            <div className="flex items-center m-2 gap-1">
                <Text variant="body-sm-bold" className="text-gray-300">Concluídas</Text>
                <Badge variant="primary">
                    de {taskCount}
                </Badge>
            </div>
        </>
    )
}